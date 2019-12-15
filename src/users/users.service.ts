import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'joe',
        password: 'joe_pwd',
      },
      {
        userId: 2,
        username: 'sue',
        password: 'sue_pwd',
      },
      {
        userId: 3,
        username: 'henry',
        password: 'henry_pwd',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
