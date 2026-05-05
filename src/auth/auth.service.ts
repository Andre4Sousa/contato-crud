import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService, // Injeção direta para buscar as credenciais
    private jwtService: JwtService,
  ) {}

  async login(email: string, pass: string) {
    // Busca o usuário diretamente pelo Prisma para garantir que temos a senha
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    // Validação com bcrypt
    if (user && (await bcrypt.compare(pass, user.password))) {
      const payload = { sub: user.id, email: user.email };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
    
    throw new UnauthorizedException('Credenciais inválidas');
  }
}