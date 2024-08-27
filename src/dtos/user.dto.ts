import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class UserDto {
    @IsString()
    @IsNotEmpty()
    name: String;

    @IsString()
    @IsNotEmpty()
    username: String;

    @IsEmail()
    @IsNotEmpty()
    email: String

    @IsNotEmpty()
    password: String

    @IsEnum(["ADMIN", "USER"])
    role: "ADMIN" | "USER"

    @IsEnum(["Male", "Female"])
    gender: "Male" | "Female"

}