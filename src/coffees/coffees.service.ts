import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    { id:"1",coffeeName: 'mano', price: 10, country: 'portsaid', amount: 1 },
    { id:"2",coffeeName: 'sada', price: 7, country: 'portsaid', amount: 3 },
    { id:"3",coffeeName: 'mazbot', price: 9, country: 'portsaid', amount: 4 },
  ];

  create(coffee: Coffee) {
  
    this.coffees.push(coffee);
  }

  get() {
    return this.coffees;
  }

  patch(id:string,updatedFields: Coffee) {
    const coffeeIndex = this.coffees.findIndex((coffee) => coffee.id === id);
        this.coffees[coffeeIndex] = {...this.coffees[coffeeIndex],...updatedFields };
    }

  delete(id:string) {
    this.coffees = this.coffees.filter((coffee) => coffee.id!== id);
  }

  getOne(id:string) {
    return this.coffees.find((coffee) => coffee.id === id);

  }
}

export type Coffee = {
    id:string;
  coffeeName: string;
  price: number;
  country: string;
  amount: number;
};
