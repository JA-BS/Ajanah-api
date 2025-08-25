import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Registration Successful';
  }

getUsers(): string {
  return "this are the users"
}

}

