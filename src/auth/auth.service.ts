import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/prisma.service';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { access } from 'fs';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private jwtService: JwtService
    ) {}

    async login(loginDto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: { email: loginDto.email },
        });

        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        
        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);

        if (!isPasswordValid) {
            throw new Error('Senha incorreta');
        }
        const payload = {email: user.email, sub: user.id};

        return {
            access_token: this.jwtService.sign(payload),
        };
  }


}
