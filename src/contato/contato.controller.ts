import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContatoService } from './contato.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';

@Controller('contato')
export class ContatoController {
  constructor(private readonly contatoService: ContatoService) {}

  @Post()
  create(@Body() createContatoDto: CreateContatoDto) {
    return this.contatoService.create(createContatoDto);
  }

  @Get()
  findAll() {
    return this.contatoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // Removido o '+': agora passamos a string direto para o service
    return this.contatoService.findOne(id); 
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContatoDto: UpdateContatoDto) {
    // Removido o '+': mantém o ID como string para o Prisma encontrar
    return this.contatoService.update(id, updateContatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // Removido o '+': evita erro de tipo se o seu ID no banco for string/uuid
    return this.contatoService.remove(id);
  }
}