import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappService {
  ping() {
    return { message: 'Módulo WhatsApp en users funcionando ✅' };
  }
}
