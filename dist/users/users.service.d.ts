import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): import("mongoose").Query<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, UserDocument>;
    findOne(id: string): import("mongoose").Query<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, UserDocument>;
    update(id: string, updateUserDto: UpdateUserDto): import("mongoose").Query<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, UserDocument>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
