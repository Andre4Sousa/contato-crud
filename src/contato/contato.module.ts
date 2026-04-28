import { Module } from '@nestjs/common';
import { ContatoService } from './contato.service';
import { ContatoController } from './contato.controller';

@Module({
  controllers: [ContatoController],
  providers: [ContatoService],
})
export class ContatoModule {}
