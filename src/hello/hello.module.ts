import { Module } from '@nestjs/common';
import { HelloService } from './hello.service';
import { HelloController } from './hello.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Greeting, GreetingSchema } from './hello.schemas';

@Module({
  imports: [MongooseModule.forFeature([{name: Greeting.name, schema: GreetingSchema}])],
  providers: [HelloService],
  controllers: [HelloController]
})
export class HelloModule {}
