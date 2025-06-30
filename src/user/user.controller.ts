import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Query, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dtos/createUser.dto";
import { LoggingInterceptor } from "../interceptors/logging.interceptor";

@Controller('/user')
@UseInterceptors(ClassSerializerInterceptor)
@UseInterceptors(LoggingInterceptor)
export class UserController{
    constructor(private userService: UserService){}
    @Post()
    // @UseInterceptors(ClassSerializerInterceptor)
      createUser(@Body() requestBody:   CreateUserDto){
        return this.userService.createAcc(requestBody);
    
      }
    @Get()
    getAllUser(){
        console.log("Second");
        return this.userService.findAll();
    }

    @Get('/:id')
    GetUserByID(@Param('id') id: number){
        return this.userService.findOne(id);
    }

    @Put('/:id')
    updateUser(@Query('id') id: number, @Body() RequestBody: any){
        return this.userService.updateById(id,RequestBody);
    }
    @Delete('/:id')
    deleteUser(@Query('id') id: number){
        return this.userService.remove(id);
    }
}