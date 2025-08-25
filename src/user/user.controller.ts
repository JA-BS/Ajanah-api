import { Controller, Get, Put } from '@nestjs/common';
import { UserService } from './user.service';


@Controller("user")
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
}
