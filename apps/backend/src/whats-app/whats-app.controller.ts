import { Controller, Get } from '@nestjs/common';
import { WhatsappService } from './whats-app.service';

@Controller('whatsapp') // 👈 importante
export class WhatsappController {
  constructor(private readonly whatsappService: WhatsappService) {}

  @Get('ping')
  testRoute() {
    return this.whatsappService.ping();
  }
}


