import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Registration Successful';
  }

  deleteUser(): string{
    return 'Delete succesfull'
  }
}

