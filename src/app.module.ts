import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { AllExceptionsFilter } from '@evnalu/nest.common';
import {
  Config,
  mongodbAsyncOptionsDemo,
  mysqlAsyncOptionsDemo,
} from './config/configuration';
import { CategoryModule } from './modules/category/category.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(Config.configOptions),
    MongooseModule.forRootAsync(mongodbAsyncOptionsDemo),
    SequelizeModule.forRootAsync(mysqlAsyncOptionsDemo),
    CategoryModule,
    UserModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule { }
