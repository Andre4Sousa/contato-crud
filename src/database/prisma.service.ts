import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { PrismaClient } from '../../generated/prisma/client.js';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const adapter = new PrismaLibSql({ url: 'file:./prisma/dev.db' });
    super({ adapter } as any);
  }

  async onModuleInit() {
    await this.$connect();
  }
}