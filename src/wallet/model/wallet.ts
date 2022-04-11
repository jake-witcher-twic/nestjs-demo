import * as Dinero from 'dinero.js';
import { Dinero as Money, Currency } from 'dinero.js';
import { WalletEntity } from './wallet.entity';

export class Wallet {
  id: string;
  name: string;
  amount: Money;

  private constructor(
    id: string,
    name: string,
    amount: number,
    currency: string,
  ) {
    this.id = id;
    this.name = name;
    this.amount = Dinero({
      amount,
      currency: Wallet.parseCurrency(currency),
    });
  }

  static fromEntity({ id, name, amount, currency }: WalletEntity) {
    return new Wallet(id, name, amount, currency);
  }

  private static parseCurrency(currency: string): Currency {
    return currency as Currency;
  }
}
