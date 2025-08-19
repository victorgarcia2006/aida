import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Interfaz para tipar los documentos de contacto en TypeScript
/* export interface IEmergencyContact extends Document {
  contactName: string;
  contactPhone: string;
  userEmail: string; // Email de la usuaria de la app
} */

export type EmergencyContactDocument = EmergencyContact & Document;

//Schema con Mongoose
@Schema()
export class EmergencyContact {
  @Prop({
    required: true,
    trim: true,
  })
  contactName: string;
  
  @Prop({
    required: true,
    trim: true,
  })
  contactPhone: string;
  
  @Prop({
    required: true,
    trim: true,
  })
  userEmail: string;
}

export const EmergencyContactSchema = SchemaFactory.createForClass(EmergencyContact);