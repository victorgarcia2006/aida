
import { Schema, model, Document } from 'mongoose';

// Interfaz para tipar los documentos de contacto en TypeScript
export interface IEmergencyContact extends Document {
  contactName: string;
  contactPhone: string;
  userEmail: string; // Email de la usuaria de la app
}

//Schema con Mongoose
const EmergencyContactSchema = new Schema<IEmergencyContact>({
  contactName: {
    type: String,
    required: true,
    trim: true, // Elimina espacios en blanco al inicio y al final, no es importante
  },
  contactPhone: {
    type: String,
    required: true,
    trim: true,
  },
  userEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true, // para que siempre guarde el email en minúsculas
  },
}, {
  timestamps: true, // guarda cuando se creo el contarto y cuando se actualizo
  versionKey: false, // Evita que se añada el campo __v (version key)
});



export const EmergencyContact = model<IEmergencyContact>('EmergencyContact', EmergencyContactSchema);