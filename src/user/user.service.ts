import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello World!';
  }
  register(): string {
    return 'Registration successful!';
  }
}

