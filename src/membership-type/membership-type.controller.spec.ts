import { Test, TestingModule } from '@nestjs/testing';
import { MembershipTypeController } from './membership-type.controller';
import { MembershipTypeService } from './membership-type.service';

describe('MembershipTypeController', () => {
  let controller: MembershipTypeController;

  const mockService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MembershipTypeController],
      providers: [
        {
          provide: MembershipTypeService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<MembershipTypeController>(MembershipTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
