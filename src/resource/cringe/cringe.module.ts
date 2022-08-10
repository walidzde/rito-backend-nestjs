import { Module } from '@nestjs/common';
import { CringeService } from './cringe.service';
import { CringeController } from './cringe.controller';

@Module({
  controllers: [CringeController],
  providers: [CringeService]
})
export class CringeModule {}
