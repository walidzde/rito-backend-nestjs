import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CringeService } from './cringe.service';
import { CreateCringeDto } from './dto/create-cringe.dto';
import { UpdateCringeDto } from './dto/update-cringe.dto';

@Controller('cringe')
export class CringeController {
  constructor(private readonly cringeService: CringeService) {}

  @Post()
  create(@Body() createCringeDto: CreateCringeDto) {
    return this.cringeService.create(createCringeDto);
  }

  @Get()
  findAll() {
    return this.cringeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cringeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCringeDto: UpdateCringeDto) {
    return this.cringeService.update(+id, updateCringeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cringeService.remove(+id);
  }
}
