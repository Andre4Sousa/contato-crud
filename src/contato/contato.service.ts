import { Injectable } from '@nestjs/common';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';

@Injectable()
export class ContatoService {
  create(createContatoDto: CreateContatoDto) {
    return 'This action adds a new contato';
  }

  findAll() {
    return `This action returns all contato`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contato`;
  }

  update(id: number, updateContatoDto: UpdateContatoDto) {
    return `This action updates a #${id} contato`;
  }

  remove(id: number) {
    return `This action removes a #${id} contato`;
  }
}
