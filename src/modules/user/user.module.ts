import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {
  UserModel,
} from './models';
import {
  UserService,
} from './services';
import {
  UserController,
} from './controllers';

@Global()
@Module({
  imports: [
    SequelizeModule.forFeature([
      UserModel,
    ]),
  ],
  providers: [
    UserService,
  ],
  controllers: [
    UserController,
  ],
  exports: [
    UserService,
  ],
})
export class UserModule {}
