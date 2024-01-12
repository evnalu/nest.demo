import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger, ResponseCode } from '@evnalu/nest.common';
import { json, urlencoded } from 'express';
import { Config } from './config/configuration';
import { AppModule } from './app.module';
import { LoggingInterceptor, QueryHandlerInterceptor, customTypes } from './shared';

const { log, err } = Logger('main');

async function bootstrap() {
  ResponseCode.init(customTypes);

  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '64mb' }));
  app.useGlobalInterceptors(new QueryHandlerInterceptor());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get<ConfigService>(ConfigService);
  const serverConfig = Config.serverConfig(configService);

  log('host', serverConfig.host, 'port', serverConfig.port);

  await app.listen(serverConfig.port, serverConfig.host);
}
bootstrap();
