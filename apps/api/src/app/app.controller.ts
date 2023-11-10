import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('message')
  getMessage() {
    return { message: 'Hello API' };
  }

  @Get('user')
  getUser() {
    return { message: 'Hello User' };
  }
}
