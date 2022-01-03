import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Pscodium:<sua senha aqui>@cluster0.ygy8w.mongodb.net/test'),UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
