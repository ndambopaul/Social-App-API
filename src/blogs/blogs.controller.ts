import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Req, Request, UseGuards, ValidationPipe } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { PostDto } from 'src/dtos/blogs.dtos';
import { AuthGuard } from 'src/auth/auth.guards';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.schema';


export type UserData = {
    userId: string,
    name: string,
    email: string,
    gender: string,
    role: string,
    username: string,
    password: string
}

@Controller('blogs')
export class BlogsController {
    constructor(private readonly blogsService: BlogsService, private usersService: UsersService) {}

    @Get()
    getAllPosts() {
        return this.blogsService.getAllPosts()
    }

    @Get(":id")
    getOnePost(@Param("id") id: string) {
        return this.blogsService.getOnePost(id)
    }


    @UseGuards(AuthGuard)
    @Post()
    async createPost(@Request() req, @Body(ValidationPipe) createPostDto: PostDto) {
        //return this.blogsService.createPost(createPostDto, req.user.userId)
        const currentUser = await this.usersService.findOne(req.user.email)
        console.log(currentUser)
        
        return this.blogsService.createPost(createPostDto, currentUser)
    }
}
