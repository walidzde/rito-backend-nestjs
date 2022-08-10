import { Injectable } from '@nestjs/common';
import { CreateCringeDto } from './dto/create-cringe.dto';
import { UpdateCringeDto } from './dto/update-cringe.dto';

@Injectable()
export class CringeService {
  create(createCringeDto: CreateCringeDto) {
    return 'This action adds a new cringe';
  }

  findAll() {
    return `This action returns all cringe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cringe`;
  }

  update(id: number, updateCringeDto: UpdateCringeDto) {
    return `This action updates a #${id} cringe`;
  }

  remove(id: number) {
    return `This action removes a #${id} cringe`;
  }
}
