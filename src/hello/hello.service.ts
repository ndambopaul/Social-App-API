import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateGreetingDto } from 'src/dtos/greetings.dtos';
import { Greeting } from './hello.schemas';
import { Model } from 'mongoose';

@Injectable()
export class HelloService {

    constructor(@InjectModel(Greeting.name) private greetingModel: Model<Greeting>) {}

    async getGreetings() {
        return this.greetingModel.find({})
    }

    async sendGreetings(createGreetingDto: CreateGreetingDto): Promise<Greeting> {
        const createdGreeting = new this.greetingModel(createGreetingDto)
        return createdGreeting.save()
    }
}
