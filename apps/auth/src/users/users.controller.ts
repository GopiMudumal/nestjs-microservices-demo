import { Controller } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  async create(createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }
}
