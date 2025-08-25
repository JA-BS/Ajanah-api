/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello World!';
  }
  register(): string {
    return 'Registration successful!';
  }

  updateUser(): string {
    return 'User information updated successfully';
  }
}

