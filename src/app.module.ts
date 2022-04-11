import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { WalletModule } from './wallet/wallet.module';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    EmployeeModule,
    WalletModule,
  ],
})
export class AppModule {}
