import { EmergencyContact, IEmergencyContact } from '../schemas/emergencyContact.schema';

// Crear--------------------------------
export const createContact = async (contactData: Omit<IEmergencyContact, 'createdAt' | 'updatedAt'>): Promise<IEmergencyContact> => {// Omit para excluir los campos de fecha
  const newContact = new EmergencyContact(contactData);//crear un nuevo documento de contacto
  await newContact.save();
  return newContact;
};

// Leer--------------------------------
//(Con email de usuaria)
export const getContactsByUserEmail = async (email: string): Promise<IEmergencyContact[]> => {
  const contacts = await EmergencyContact.find({ userEmail: email.toLowerCase() });//busqueda con minusculas
  return contacts;
};

//Update--------------------------------
export const updateContactById = async (id: string, updates: Partial<IEmergencyContact>): Promise<IEmergencyContact | null> => {

  const updatedContact = await EmergencyContact.findByIdAndUpdate(id, updates, { new: true });
  return updatedContact;// { new: true } para que retorne el documento actualizado
};

// Delete--------------------------------
export const deleteContactById = async (id: string): Promise<IEmergencyContact | null> => {
  const deletedContact = await EmergencyContact.findByIdAndDelete(id);
  return deletedContact;
};