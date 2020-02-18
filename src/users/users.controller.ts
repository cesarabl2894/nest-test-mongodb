import {
  Controller,
  Get,
  Body,
  Param,
  Delete,
  Post,
  Put,
  Query,
} from '@nestjs/common';
// import { Request } from 'express';
import { User } from './interfaces/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll(@Query() query: User): object {
    console.log(query);
    return this.usersService.findAll();
  }
  @Post()
  async create(@Body() user: User) {
    console.log(user);
    this.usersService.create(user);
    return `User ${user.id} Added`;
  }
  // Promise Base
  @Get('profile')
  async findUsers(): Promise<any[]> {
    return [];
  }
  @Get(':id')
  findOne(@Param() params): object {
    return this.usersService.findOne(params.id);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return `This action removes user ${id}`;
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() user: User) {
    this.usersService.update(id, user);
    return `This action updates user ${id}`;
  }
}
