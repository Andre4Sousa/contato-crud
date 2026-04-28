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
    return this.contatoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContatoDto: UpdateContatoDto) {
    return this.contatoService.update(+id, updateContatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contatoService.remove(+id);
  }
}
