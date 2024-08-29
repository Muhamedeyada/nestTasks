import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesService } from './coffees/coffees.service';
import { CoffeesController } from './coffees/coffees.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [AppController, CoffeesController, UsersController],
  providers: [AppService, CoffeesService, UsersService],
})
export class AppModule {}
