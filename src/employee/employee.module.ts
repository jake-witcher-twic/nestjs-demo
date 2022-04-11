import { Module } from '@nestjs/common';
import { WalletModule } from '../wallet/wallet.module';
import { EmployeeController } from './employee.controller';
import { EmployeeRepository } from './employee.repository';
import { EmployeeService } from './employee.service';

@Module({
  imports: [WalletModule],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository],
})
export class EmployeeModule {}
