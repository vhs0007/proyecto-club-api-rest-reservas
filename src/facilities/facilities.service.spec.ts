import { Test, TestingModule } from '@nestjs/testing';
import { FacilitiesService } from './facilities.service';
import { FacilitiesDataSourceImpl } from './data/facilities.datasource.impl';

describe('FacilitiesService', () => {
  let service: FacilitiesService;

  const mockDataSource = {
    getFacilities: jest.fn(),
    getFacilityById: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FacilitiesService,
        {
          provide: FacilitiesDataSourceImpl,
          useValue: mockDataSource,
        },
      ],
    }).compile();

    service = module.get<FacilitiesService>(FacilitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
