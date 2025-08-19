import { Request, Response } from 'express';
import * as contactService from '../services/emergencyContact.service';

// Controlador para CREATE---------------------
export const handleCreateContact = async (req: Request, res: Response) => {
  try {
    const newContact = await contactService.createContact(req.body);
    res.status(201).json({ message: 'Contacto creado exitosamente', data: newContact });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el contacto', error });
  }
};

// Controlador de READ------------------------------
export const handleGetContacts = async (req: Request, res: Response) => {
  try {
    const userEmail = req.params.email; // Obtenemos el email de la URL
    const contacts = await contactService.getContactsByUserEmail(userEmail);
    res.status(200).json({ data: contacts });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los contactos', error });
  }
};

// Controlador de UPDATE------------------------------
export const handleUpdateContact = async (req: Request, res: Response) => {
  try {
    const contactId = req.params.id; // Obtenemos el ID del contacto de la URL
    const updatedContact = await contactService.updateContactById(contactId, req.body);
    if (!updatedContact) {
      return res.status(404).json({ message: 'Contacto no encontrado' });
    }
    res.status(200).json({ message: 'Contacto actualizado exitosamente', data: updatedContact });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el contacto', error });
  }
};

// Controlador de UPDATE------------------------------
export const handleDeleteContact = async (req: Request, res: Response) => {
  try {
    const contactId = req.params.id; // Obtenemos el ID del contacto de la URL
    const deletedContact = await contactService.deleteContactById(contactId);
    if (!deletedContact) {
      return res.status(404).json({ message: 'Contacto no encontrado' });
    }
    res.status(200).json({ message: 'Contacto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el contacto', error });
  }
};