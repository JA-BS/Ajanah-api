import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Registration Successful';
  }
  

  updateUsers():string{
    return 'update successful';
  }

}

