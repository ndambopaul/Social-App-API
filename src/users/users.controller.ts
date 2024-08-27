import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from 'src/dtos/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers()
    }

    @Get(":email")
    getOneUser(@Param("email") email: string) {
        return this.userService.findOneUser(email)
    }

    @Post("register")
    registerUser(@Body(ValidationPipe) userDto: UserDto) {
        return this.userService.registerUser(userDto)
    }
}
