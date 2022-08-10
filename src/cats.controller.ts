import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateCatDto } from './cat';
import { CatsService } from './cat.service';


@Controller('cats')
export class CatsController {
  constructor(private catService : CatsService) { }

  @Get()
  getHello(): string {
   return  'hello'
  }
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {

    return this.catService.create(createCatDto);
  }
  @Get('/test')
  async getTest() {
    return this.catService.findAll();
  }
}
