import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://exporjames06:08Mayo_2006@aiden.tks3wq4.mongodb.net/?retryWrites=true&w=majority&appName=aiden'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
