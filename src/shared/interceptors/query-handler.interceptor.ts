import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class QueryHandlerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const query = req.query;

    if (!!query.skip) {
      query.skip = Number(query.skip);
    }
    if (!!query.limit) {
      query.limit = Number(query.limit);
    }

    return next.handle();
  }
}
