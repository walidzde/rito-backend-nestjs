import { Test, TestingModule } from '@nestjs/testing';
import { CringeService } from './cringe.service';

describe('CringeService', () => {
  let service: CringeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CringeService],
    }).compile();

    service = module.get<CringeService>(CringeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
