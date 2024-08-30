import { IsNotEmpty, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class PostDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}

export class UpdatePostDto extends PartialType(PostDto) {}