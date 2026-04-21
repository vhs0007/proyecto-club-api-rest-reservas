import { Test, TestingModule } from '@nestjs/testing';
import { MembershipTypeService } from './membership-type.service';
import { MembershipTypeDataSourceImpl } from './data/membership-type.datasource.impl';

describe('MembershipTypeService', () => {
  let service: MembershipTypeService;

  const mockDataSource = {
    getMembershipTypes: jest.fn(),
    getMembershipTypeById: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MembershipTypeService,
        {
          provide: MembershipTypeDataSourceImpl,
          useValue: mockDataSource,
        },
      ],
    }).compile();

    service = module.get<MembershipTypeService>(MembershipTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
