import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types, SchemaTypes } from "mongoose";


export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

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