import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import * as requestIp from 'request-ip';
import { ApiResponse, Logger } from '@evnalu/nest.common';

const { log, err } = Logger('loggingInterceptor');

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const ctx = context.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();
    const clientIp = requestIp.getClientIp(req);

    return next.handle().pipe(
      tap(() => {
        this.print(
          req.method,
          res.statusCode,
          req.url,
          clientIp,
          now,
        );
      }),
      catchError((exception: any) =>
        throwError(() => {
          let status = 500;
          let data: any;
          if (exception instanceof HttpException) {
            status = exception.getStatus();
            data = exception.getResponse();
          } else if (exception instanceof ApiResponse) {
            status = 200;
            data = exception;
          } else if (exception instanceof Object) {
            status = 200;
            data = exception;
          }

          this.print(
            req.method,
            status,
            req.url,
            clientIp,
            now,
            data,
          );
          return exception;
        }),
      ),
    );
  }

  print(
    method: string,
    statusCode: number,
    url: string,
    ip: string,
    startTimeStamp: number,
    error: any = null,
  ) {
    const ms = Date.now() - startTimeStamp;
    log(`${method} ${statusCode} ${ip} ${url} ${error ? JSON.stringify(error) + ' ' : ''}- ${ms}ms`);
  }
}
