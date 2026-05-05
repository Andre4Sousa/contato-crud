import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { PrismaClient } from '../../generated/prisma/client.js';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(config: ConfigService) {
    const adapter = new PrismaLibSql({ url: config.get<string>('DATABASE_URL')! });
    super({ adapter } as any);
  }

  async onModuleInit() {
    await this.$connect();
  }
}