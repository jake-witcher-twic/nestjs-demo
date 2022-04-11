import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeService } from './employee.service';
import { EmployeeRepository } from './employee.repository';
import { WalletService } from '../wallet/wallet.service';
import { WalletRepository } from '../wallet/wallet.repository';
import { NotFoundException } from '@nestjs/common';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeeService,
        EmployeeRepository,
        WalletService,
        WalletRepository,
      ],
    }).compile();

    service = module.get<EmployeeService>(EmployeeService);
  });

  it('should return employee when employee id is valid', async () => {
    const employeeId = '1eda74dc-5951-48c6-88c6-fc28047affce';
    const employee = await service.findOneById(employeeId);

    expect(employee).toBeTruthy();
  });

  it('should throw a not found exception when employee id is invalid', async () => {
    const employeeId = 'invalid-employee-id';

    await expect(() => service.findOneById(employeeId)).rejects.toThrowError(
      NotFoundException,
    );
  });
});
