import { Injectable } from '@nestjs/common';
import { Wallet } from './model/wallet';
import { WalletRepository } from './wallet.repository';

@Injectable()
export class WalletService {
  constructor(private readonly walletRepository: WalletRepository) {}

  async findAllByEmployeeId(employeeId: string) {
    return this.walletRepository
      .findAllByEmployeeId(employeeId)
      .then((wallets) => wallets.map(Wallet.fromEntity));
  }
}
