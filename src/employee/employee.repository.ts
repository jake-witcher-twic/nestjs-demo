import { Injectable } from '@nestjs/common';
import { EmployeeEntity } from './model/employee.entity';

const employees: Record<string, EmployeeEntity> = {
  '1eda74dc-5951-48c6-88c6-fc28047affce': {
    id: '1eda74dc-5951-48c6-88c6-fc28047affce',
    email: 'jane.doe@example.com',
    lastName: 'Doe',
    firstName: 'Jane',
    createdAt: new Date('2022-03-01'),
  },
};

@Injectable()
export class EmployeeRepository {
  async findOneById(employeeId: string): Promise<EmployeeEntity | undefined> {
    return Promise.resolve(employees[employeeId]);
  }
}
