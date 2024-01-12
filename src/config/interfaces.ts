import { MongooseModuleOptions } from '@nestjs/mongoose';
import { SequelizeModuleOptions } from '@nestjs/sequelize';

export interface ServerConfig {
  host: string;
  port: number;
}

export interface DataConfig {
  mongodb_demo: MongooseModuleOptions;
  mysql_demo: SequelizeModuleOptions;
}
