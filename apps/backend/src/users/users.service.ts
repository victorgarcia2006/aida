import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from "../schemas/users.schema";

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>){}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  login(user: UserDTO){
    //Tiene que comparar el email y la contraseña y si son igual enviar un true
  }

}
