import { Test, TestingModule } from '@nestjs/testing';
import { AtividadeService } from './atividade.service';

describe('AtividadeService', () => {
  let provider: AtividadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtividadeService],
    }).compile();

    provider = module.get<AtividadeService>(AtividadeService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
