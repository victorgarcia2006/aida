import { Module } from '@nestjs/common';
import { WhatsappController } from './whats-app.controller';
import { WhatsappService } from './whats-app.service';

@Module({
  controllers: [WhatsappController],
  providers: [WhatsappService],
})
export class WhatsappModule {}
