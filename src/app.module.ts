import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ScheduleModule } from '@nestjs/schedule';
import { FriendsModule } from './friends/friends.module';
import { BlogsModule } from './blogs/blogs.module';


@Module({
  imports: [
    HelloModule, 
    MongooseModule.forRoot("mongodb://localhost:27017/socialdb"), 
    UsersModule, 
    AuthModule, 
    NotificationsModule,
    ScheduleModule.forRoot(),
    FriendsModule,
    BlogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
