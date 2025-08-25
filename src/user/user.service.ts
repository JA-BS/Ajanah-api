/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello World!';
  }


getUsers(): string {
  return "this are the users"
}

  register(): string {
    return 'Registration successful!';
  }

  updateUser(): string {
    return 'User information updated successfully';
  }
  

  updateUsers():string{
    return 'update successful';
  }


}

