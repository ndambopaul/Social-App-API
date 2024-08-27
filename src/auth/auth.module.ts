import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/users.schema';

import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './auth.constants';

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]), 
    UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' }
    })
  ],
  providers: [AuthService, UsersService],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
