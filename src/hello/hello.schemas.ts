import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";



export type GreetingDocument = HydratedDocument<Greeting>;

@Schema()
export class Greeting {
    @Prop()
    username: string;

    @Prop()
    message: string

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const GreetingSchema = SchemaFactory.createForClass(Greeting)