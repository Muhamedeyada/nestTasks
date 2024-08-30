import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    
  } from '@nestjs/common';
import { UsersService ,User } from './users.service';
@Controller('/api/v1/users')
export class UsersController {
    private service;
    constructor(private readonly userService: UsersService) {}
    @Get()
    getAllUsers() {
      return this.userService.get();
    }
    @Get(':id')
    getOneUser(@Param('id') id: string) {
      return this.userService.getOne(id);
    }
  
    @Post()
    createUser(@Body() body) {
      console.log(body);
      return this.userService.create(body);
    }
  
    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() body:User) {
      console.log(body, id);
  
  return this.userService.patch(id, body)  }
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
      console.log(`we will delete ${id}`);
      return this.userService.delete(id);
    }
    @Get('/coffee/:id')
    getUserCoffe(@Param('id') id: string) {
      return this.userService.getUserCoffe(id);
    }
  }