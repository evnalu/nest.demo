import { Controller } from '@nestjs/common';
import { OrmBaseController } from '@evnalu/nest.common';
import { UserService } from '../services';
import { UserModel } from '../models';

@Controller('users')
export class UserController extends OrmBaseController<UserModel> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}
