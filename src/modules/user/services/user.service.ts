import { Logger, OrmService } from '@evnalu/nest.common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from '../models';

const { log, err } = Logger('user:services:user');

@Injectable()
export class UserService extends OrmService<UserModel> {
  public constructor(
    @InjectModel(UserModel) private readonly userModel: typeof UserModel,
  ) {
    super(userModel);
  }
}
