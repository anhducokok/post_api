import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('/user')
export class UserController{
    constructor(private userService: UserService){}
    @Post()
      createUser(@Body() requestBody:any){
        return this.userService.createAcc(requestBody);
    
      }
    @Get()
    getAllUser(){
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