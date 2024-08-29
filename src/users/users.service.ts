import { Injectable } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';

@Injectable()
export class UsersService {
  constructor(private CoffeesService: CoffeesService) {}
  private users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      age: 30,
      phone: '123-456-7890',
      favCoffe: ['1'],
    },
    {
      id: '2',
      name: 'Jane Smith',
      age: 25,
      phone: '987-654-3210',
      favCoffe: ['2'],
    },
    {
      id: '3',
      name: 'Alice Johnson',
      age: 35,
      phone: '555-555-5555',
      favCoffe: ['3'],
    },
  ];

  create(user: User) {
    this.users.push(user);
  }

  get() {
    return this.users;
  }

  patch(id: string, updatedFields: User) {
    const UserIndex = this.users.findIndex((User) => User.id === id);
    this.users[UserIndex] = { ...this.users[UserIndex], ...updatedFields };
  }

  delete(id: string) {
    this.users = this.users.filter((User) => User.id !== id);
  }

  getOne(id: string) {
    return this.users.find((User) => User.id === id);
  }
  getUserCoffe(id: string) {
    const userArr = this.users.find((User) => User.id == id).favCoffe;
    console.log(this.CoffeesService.get());
    const favCoffee = userArr.map(
        
      (coffeeId) =>
        `${coffeeId} is ${this.CoffeesService.get().find(
          (coffee) => coffeeId == coffee.id,
        ).coffeeName}`,
    );
    return favCoffee;
  }
}
export type User = {
  id: string;
  name: string;
  age: number;
  phone: string;
  favCoffe: [string];
};
