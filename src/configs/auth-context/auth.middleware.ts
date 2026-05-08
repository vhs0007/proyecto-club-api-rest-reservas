import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { runWithToken } from './auth-context';

@Injectable()
export class AuthContextMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    const header = req.headers['authorization'];
    const token =
      typeof header === 'string'
        ? header.replace(/^Bearer\s+/i, '')
        : undefined;
    runWithToken(token, () => next());
  }
}
