import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  // Injetamos o PrismaService para acessar o banco
  constructor(private prisma: PrismaService) {}

  
  async create(createUserDto: CreateUserDto) {
  const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
  return await this.prisma.user.create({
    data: {
      ...createUserDto,
      password: hashedPassword,
    },
  });

  //async create(createUserDto: CreateUserDto) {
    // Cria o usuário no banco
  //  return await this.prisma.user.create({
    //  data: createUserDto,
    //});
}

  async findAll() {
    // Retorna todos os usuários e inclui seus contatos[cite: 1]
    return await this.prisma.user.findMany({
      include: {
        contacts: true,
      },
    });
  }

  async findOne(id: string) {
    // Busca um usuário específico pelo ID[cite: 1]
    return await this.prisma.user.findUnique({
      where: { id },
      include: {
        contacts: true,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    // Atualiza os dados do usuário[cite: 1]
    return await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    // Remove o usuário do banco[cite: 1]
    return await this.prisma.user.delete({
      where: { id },
    });
  }
  
}