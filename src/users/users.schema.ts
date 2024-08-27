import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop({ unique: true })
    username: string;

    @Prop({ unique: true })
    email: string;

    @Prop({ enum: ["Male", "Female"] })
    gender: string;

    @Prop()
    password: string;

    @Prop({ enum: ["ADMIN", "USER"] })
    role: string

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User)