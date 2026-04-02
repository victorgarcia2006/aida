import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WhatsappModule } from './whats-app/whats-app.module';
import { ConfigModule } from '@nestjs/config';
import { TwilioModule } from './twilio/twilio.module'; // Adjust the import path as necessary
import { configDotenv } from 'dotenv';

configDotenv();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI!), WhatsappModule,
    /* ConfigModule.forRoot({ isGlobal: true,
      envFilePath: '../.env', // Adjust
     }), */
    TwilioModule, // Assuming TwilioModule is defined in twilio/twilio.module.ts
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}
