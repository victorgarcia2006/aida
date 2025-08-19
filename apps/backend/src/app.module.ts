import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WhatsappModule } from './whats-app/whats-app.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://exporjames06:08Mayo_2006@aiden.tks3wq4.mongodb.net/?retryWrites=true&w=majority&appName=aiden'), WhatsappModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
