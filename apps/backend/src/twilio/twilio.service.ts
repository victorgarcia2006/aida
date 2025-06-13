import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';
import * as dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config({
  path: process.cwd() + '/.env',
});

@Injectable()
export class TwilioService {
  private client: Twilio;
  private from: string;

  constructor(private configService: ConfigService) {
    const accountSid = this.configService.get<string>('TWILIO_ACCOUNT_SID');
    const authToken = this.configService.get<string>('TWILIO_AUTH_TOKEN');
    const fromNumber = this.configService.get<string>('TWILIO_PHONE_NUMBER');

    // Validar que todas las credenciales existan
    if (!accountSid || !authToken || !fromNumber) {
      throw new Error('Twilio credentials are missing. Check your .env file.');
    }

    this.from = fromNumber;
    this.client = new Twilio(accountSid, authToken);
  }

  async sendMessage(body: string) {
    const numbers = [
      { to: '+524781055650' },
      { to: '+524925594093' },
      { to: '+524922238948' },
      { to: '+524781248690' },
    ];
    numbers.map(async (number) => {
      try {
        console.log('Sending message to:', number, 'from:', this.from);

        const message = await this.client.messages.create({
          body,
          from: this.from,
          to: number.to,
        });

        console.log('Message sent successfully:', message.sid);
        return message;
      } catch (error) {
        console.error('Error sending Twilio message:', error);
        throw new Error(`Failed to send message: ${error.message}`);
      }
    });
  }
}
