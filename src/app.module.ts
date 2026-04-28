import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContatoModule } from './contato/contato.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ContatoModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
