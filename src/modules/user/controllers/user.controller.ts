import { Controller, Get, Param } from '@nestjs/common';
import { Helper, OrmBaseController } from '@evnalu/nest.common';
import { UserService } from '../services';
import { UserModel } from '../models';

@Controller('users')
export class UserController extends OrmBaseController<UserModel> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  @Get('/username/:username')
  async getByUsername(
    @Param('username') username: string
  ): Promise<UserModel> {
    const userModel = await this.userService.getByUsername(username);
    Helper.trial(userModel, 10000);

    return userModel;
  }
}
