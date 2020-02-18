import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/users.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  update(_id: string, user: User): Promise<User[]> {
    return this.userModel.updateOne({ _id: _id }, user).exec();
  }

  findOne(_id: string) {
    return this.userModel.findOne({ _id: _id });
  }

  delete(_id: string) {
    return this.userModel.deleteOne({ _id: _id }, err => err);
  }
}
