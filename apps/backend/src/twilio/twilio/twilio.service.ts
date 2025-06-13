import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';
import * as dotenv from "dotenv";

dotenv.config({ path: process.cwd() + '/.env' }); // Cargar variables de entorno desde el archivo .env

@Injectable()
export class TwilioService {
  private client: Twilio;
  private from: string;

  constructor(private configService: ConfigService) {
    const accountSid = this.configService.get<string>(process.env.TWILIO_ACCOUNT_SID);
    const authToken = this.configService.get<string>(process.env.TWILIO_AUTH_TOKEN);;
    const fromNumber = this.configService.get<string>(process.env.TWILIO_PHONE_NUMBER);

    // Validar que todas las credenciales existan
    if (!accountSid || !authToken || !fromNumber) {
      throw new Error('Twilio credentials are missing. Check your .env file.');
    }

    this.from = fromNumber;
    this.client = new Twilio(accountSid, authToken);
  }

  async sendMessage(to: string, body: string) {
    try {
      console.log('Sending message to:', to, 'from:', this.from);
      
      const message = await this.client.messages.create({
        body,
        from: this.from,
        to,
      });

      console.log('Message sent successfully:', message.sid);
      return message;
    } catch (error) {
      console.error('Error sending Twilio message:', error);
      throw new Error(`Failed to send message: ${error.message}`);
    }
  }
}