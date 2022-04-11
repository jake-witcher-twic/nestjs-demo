import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  private readonly authToken: string;

  constructor(private config: ConfigService) {
    this.authToken = this.config.get<string>('token.admin');
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const authToken = context
      .switchToHttp()
      .getRequest<Request>()
      .header('x-auth-token');

    if (!authToken || authToken !== this.authToken) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
