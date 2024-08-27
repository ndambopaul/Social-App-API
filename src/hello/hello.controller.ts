import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';

import { CreateGreetingDto } from 'src/dtos/greetings.dtos';
import { HelloService } from './hello.service';


@Controller('hello')
export class HelloController {
    constructor(private readonly helloService: HelloService) {}

    @Get()
    getGreeting() {
        return this.helloService.getGreetings()
    }

    @Post()
    sendGreetings(@Body(ValidationPipe) createGreetingDto: CreateGreetingDto) {
        return this.helloService.sendGreetings(createGreetingDto)
    }
}
