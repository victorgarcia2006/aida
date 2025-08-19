// aida/apps/backend/src/routes/emergencyContact.routes.ts

import { Router } from 'express';
import {
  handleCreateContact,
  handleGetContacts,
  handleUpdateContact,
  handleDeleteContact
} from '../controllers/emergencyContact.controller';

const router = Router();

// --- Rutas para el CRUD de Contactos de Emergencia ---

// [C]REATE: Crear un nuevo contacto
// POST /api/contacts
router.post('/contacts', handleCreateContact);

// [R]EAD: Obtener todos los contactos de un usuario
// GET /api/contacts/user/usuario@email.com
router.get('/contacts/user/:email', handleGetContacts);

// [U]PDATE: Actualizar un contacto existente por su ID
// PUT /api/contacts/60d21b4667d0d8992e610c85
router.put('/contacts/:id', handleUpdateContact);

// [D]ELETE: Eliminar un contacto por su ID
// DELETE /api/contacts/60d21b4667d0d8992e610c85
router.delete('/contacts/:id', handleDeleteContact);

export default router;