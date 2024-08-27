import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from 'src/dtos/login.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async loginUser(loginDto: LoginDto): Promise<{access_token: string}> {
        const user = await this.userService.findOneUser(loginDto.email)

        if(!user) throw new NotFoundException(`User with email: ${loginDto.email} not found!`)
        
        const passwordMatches = await bcrypt.compare(loginDto.password, user?.password)
        if(!passwordMatches) throw new UnauthorizedException("Incorrect password")

        const payload = { sub: user.userId, username: user.username, role: user.role, name: user.name, email: user.email, gender: user.gender };
        

        return {
            access_token: await this.jwtService.signAsync(payload),
          };
    }
}
