import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContatoModule } from './contato/contato.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, ContatoModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
