import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './user.model';
import { CreateUserDto } from './create-user.dto';
import { ConfigService } from '@nestjs/config';

@Controller('users')
export class UsersController {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {}

  @Get()
  findAll(): Promise<User[]> {
    console.log('envname: ' + process.env.NAME);
    console.log('configService: ', this.configService);
    console.log('DB_NAME: ', this.configService.get<string>('DB_NAME'));
    console.log('HOST: ', this.configService.get<string>('database.host'));
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
