import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WhatsappModule } from './whats-app/whats-app.module';
import { ConfigModule } from '@nestjs/config';
import { TwilioModule } from './twilio/twilio.module'; // Adjust the import path as necessary

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://exporjames06:08Mayo_2006@aiden.tks3wq4.mongodb.net/?retryWrites=true&w=majority&appName=aiden'), WhatsappModule,
    /* ConfigModule.forRoot({ isGlobal: true,
      envFilePath: '../.env', // Adjust
     }), */
    TwilioModule, // Assuming TwilioModule is defined in twilio/twilio.module.ts
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}
