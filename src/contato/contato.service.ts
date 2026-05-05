import { Injectable } from '@nestjs/common';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { PrismaService } from '../database/prisma.service'; // Ajuste o caminho se necessário

@Injectable()
export class ContatoService {
  // O constructor "traz" o banco para dentro do service
  constructor(private prisma: PrismaService) {}

  async create(createContatoDto: CreateContatoDto) {
    // Cria um contato no banco baseado no schema.prisma
    return await this.prisma.contato.create({
      data: createContatoDto,
    });
  }

  async findAll() {
    // Retorna todos os contatos
    return await this.prisma.contato.findMany();
  }

  async findOne(id: string) { // Mudei para string, pois UUIDs são comuns em IDs
    return await this.prisma.contato.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateContatoDto: UpdateContatoDto) {
    return await this.prisma.contato.update({
      where: { id },
      data: updateContatoDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.contato.delete({
      where: { id },
    });
  }
}

