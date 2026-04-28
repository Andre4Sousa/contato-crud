import { Test, TestingModule } from '@nestjs/testing';
import { ContatoController } from './contato.controller';
import { ContatoService } from './contato.service';

describe('ContatoController', () => {
  let controller: ContatoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContatoController],
      providers: [ContatoService],
    }).compile();

    controller = module.get<ContatoController>(ContatoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
