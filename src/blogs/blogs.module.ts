import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './blogs.schemas';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }, { name: User.name, schema: User }]), UsersModule],
  providers: [BlogsService, JwtService, UsersService],
  controllers: [BlogsController]
})
export class BlogsModule {}
