import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User{
    @Prop({required: true})
    nombre: string;

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    contrasena: string;
}

export const UserSchema = SchemaFactory.createForClass(User);