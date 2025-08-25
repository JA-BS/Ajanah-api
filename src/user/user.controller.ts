

import { Controller, Get, Post } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

    @Put("Update")
      update(): string {
    return this.userService.updateUsers();
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
