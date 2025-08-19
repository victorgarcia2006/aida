import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User{
    @Prop({required: true})
    nombre: string;

    @Prop({required: true})
    email: string;

    /*
    Poner fecha y teléfono del usuario
    */

    @Prop({required: true})
    contrasena: string;
}

export const UserSchema = SchemaFactory.createForClass(User);