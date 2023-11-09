import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { humanizeDate } from '@app-nx/libs/dfn';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getData() {
    const user = await this.prisma.user.findMany({});
    return { data: user, dt: humanizeDate() };
  }
}
