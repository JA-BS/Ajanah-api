/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Registration Successful';
  }

  updateUser(): string {
    return 'User information updated successfully';
  }
}

