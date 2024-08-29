import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: User[] = [
    {id:1, name: 'John Doe', age: 30, phone: '123-456-7890' },
    {id:2, name: 'Jane Smith', age: 25, phone: '987-654-3210' },
    {id:3, name: 'Alice Johnson', age: 35, phone: '555-555-5555' },
  ];

  create(user: User) {
    const newUser = {
      ...user,
      id: Math.floor(Math.random() * 1000),
    };
    this.users.push(newUser);
    return newUser;
  }

  get() {
    return this.users;
  }

  patch() {

}

  delete(id:number) {
    this.users = this.users.filter((user) => user.id!== id);
    return true;
  }

  getOne(id:number) {
    return this.users.find((user) => user.id === id);
  }
}
type User = {
    id:number;
  name: string;
  age: number;
  phone: string;
};
