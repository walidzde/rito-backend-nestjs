import { Test, TestingModule } from '@nestjs/testing';
import { CringeController } from './cringe.controller';
import { CringeService } from './cringe.service';

describe('CringeController', () => {
  let controller: CringeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CringeController],
      providers: [CringeService],
    }).compile();

    controller = module.get<CringeController>(CringeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
