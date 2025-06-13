import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { TwilioService } from './twilio.service';

@Controller('twilio')
export class TwilioController {
  constructor(private readonly twilioService: TwilioService) {}

  @Post('send-message')
  async sendMessage(
    @Body('body') body: string,
  ) {
    try {
      // Validar que los parámetros existan
      if (!body) {
        throw new HttpException(
          'Both "to" and "body" are required',
          HttpStatus.BAD_REQUEST
        );
      }

      const result = await this.twilioService.sendMessage(body);
      return {
        success: true,
        message: 'SMS sent successfully',
        data: result,
      };
    } catch (error) {
      console.error('Controller error:', error);
      throw new HttpException(
        error.message || 'Failed to send SMS',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  /* // Endpoint de prueba más sencillo
  @Post('test')
  async testMessage() {
    try {
      const result = await this.twilioService.sendMessage(
        '+524781055650', // Reemplaza con tu número real
        'Mensaje de prueba desde NestJS'
      );
      return { success: true, data: result };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  } */
}