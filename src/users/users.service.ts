import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';
import { Model } from 'mongoose';
import { UserDto } from 'src/dtos/user.dto';

import * as bcrypt from "bcrypt"

export type UserData = {
    userId: string,
    name: string,
    email: string,
    gender: string,
    role: string,
    username: string,
    password: string
}

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async getAllUsers() {
        return this.userModel.find({})
    }

    async registerUser(userDto: UserDto) {
        try {
            const userPassword = userDto.password
            const hashedPassword = await bcrypt.hash(userPassword.toString(), 10)
            console.log(hashedPassword)
            userDto.password = hashedPassword
            const newUser = new this.userModel(userDto)
            return newUser.save()
        } catch (error) {
            return { error: error.message }
        }   
    }

    async findOneUser(email: string): Promise<UserData> {
        const foundUser = await this.userModel.findOne({ email }).exec()
        const userId = foundUser._id
        const newUser = { 
            userId: userId.toString(),
            email: foundUser.email,
            username: foundUser.username,
            gender: foundUser.gender,
            name: foundUser.name,
            role: foundUser.role,
            password: foundUser.password
         }
        return newUser
    }

}
