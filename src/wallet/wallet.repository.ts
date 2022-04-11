import { Injectable } from '@nestjs/common';
import { WalletEntity } from './model/wallet.entity';

const wallets: Array<WalletEntity> = [
  {
    id: '1',
    employeeId: '1eda74dc-5951-48c6-88c6-fc28047affce',
    name: 'wellness',
    amount: 20000,
    currency: 'USD',
  },
  {
    id: '2',
    employeeId: '1eda74dc-5951-48c6-88c6-fc28047affce',
    name: 'family',
    amount: 10000,
    currency: 'USD',
  },
];

@Injectable()
export class WalletRepository {
  async findAllByEmployeeId(employeeId: string): Promise<Array<WalletEntity>> {
    return Promise.resolve(
      wallets.filter((wallet) => wallet.employeeId === employeeId),
    );
  }
}
