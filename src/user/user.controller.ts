
import { Controller, Get, Post } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }


  @Patch("update-info")
updateUser(): string {
  return this.userService.updateUser();
}

  @Post("register")
    register(): string {
        return this.userService.register();
    }

}
