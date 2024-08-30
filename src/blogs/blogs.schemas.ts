import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from "src/users/users.schema";
import { Types, SchemaTypes } from "mongoose";

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;

    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop({ default: false })
    published: boolean;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post)