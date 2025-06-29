import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'my_post',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Chỉ dùng dev, tự động tạo bảng
    })
    ,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
