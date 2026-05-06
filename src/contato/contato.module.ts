import { Module } from '@nestjs/common';
import { ContatoService } from './contato.service';
import { ContatoController } from './contato.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ContatoController],
  providers: [ContatoService],
})
export class ContatoModule {}
