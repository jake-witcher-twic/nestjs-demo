import { Injectable, NotFoundException } from '@nestjs/common';
import { WalletService } from '../wallet/wallet.service';
import { EmployeeRepository } from './employee.repository';
import { Employee } from './model/employee';

@Injectable()
export class EmployeeService {
  constructor(
    private readonly employeeRepository: EmployeeRepository,
    private readonly walletService: WalletService,
  ) {}
  async findOneById(id: string): Promise<Employee> {
    const wallets = await this.walletService.findAllByEmployeeId(id);
    const employee = await this.employeeRepository.findOneById(id);

    if (!employee) {
      throw new NotFoundException(`employee with id ${id} not found`);
    }

    return Employee.fromEntity(employee, wallets);
  }
}
