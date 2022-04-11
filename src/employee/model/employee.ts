import { Wallet } from '../../wallet/model/wallet';
import { EmployeeEntity } from './employee.entity';

export class Employee {
  private constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly lastName: string,
    public readonly firstName: string,
    public readonly createdAt: Date,
    public readonly wallets?: Array<Wallet>,
  ) {}

  static fromEntity(
    { id, email, lastName, firstName, createdAt }: EmployeeEntity,
    wallets?: Array<Wallet>,
  ) {
    return new Employee(id, email, lastName, firstName, createdAt, wallets);
  }
}
