import { IsString, IsNotEmpty, IsDate } from "class-validator"
export class CreateGreetingDto {

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    message: string;

}