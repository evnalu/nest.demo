import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  MongooseModuleAsyncOptions,
  MongooseModuleOptions,
} from '@nestjs/mongoose';
import { Config as BaseConfig } from '@evnalu/nest.common';
import {
  SequelizeModuleAsyncOptions,
  SequelizeModuleOptions,
} from '@nestjs/sequelize';
import {
  DataConfig,
  ServerConfig,
} from './interfaces';
import { MongodbConnectionNames } from '../shared/constants';
import {
  UserModel,
} from '../modules/user/models';

export class Config extends BaseConfig {
  public static serverConfig(configService: ConfigService): ServerConfig {
    return configService.get<ServerConfig>('server');
  }

  public static mongodbConfigDemo(
    configService: ConfigService,
  ): MongooseModuleOptions {
    return configService.get<DataConfig>('db').mongodb_demo;
  }

  public static mysqlConfigDemo(
    configService: ConfigService,
  ): SequelizeModuleOptions {
    const config = configService.get<DataConfig>('db').mysql_demo;
    config.models = [
      UserModel,
    ];
    config.define = {
      timestamps: false,
    };
    return config;
  }
}

export const mongodbAsyncOptionsDemo: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  connectionName: MongodbConnectionNames.demo,
  useFactory: Config.mongodbConfigDemo,
  inject: [ConfigService],
};

export const mysqlAsyncOptionsDemo: SequelizeModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: Config.mysqlConfigDemo,
  inject: [ConfigService],
};
