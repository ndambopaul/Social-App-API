import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/dtos/login.dto';
import { AuthGuard } from './auth.guards';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post("login")
    loginUser(@Body(ValidationPipe) loginDto: LoginDto) {
        return this.authService.loginUser(loginDto)
    }

    @UseGuards(AuthGuard)
    @Get("profile")
    getProfile(@Request() req) {
        return req.user
    }
}
