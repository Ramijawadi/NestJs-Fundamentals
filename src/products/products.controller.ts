import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //if we wanna use nested URL for this specific  Get request
  @Get('clothes')
  //Will try to use Response here 
  findAll(@Res() response:any) {
    response.status(200).send('this actions return all products');
  }

  //to get a specific product we should pass the id as parameter
  //its' totally dynamic
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this action return ${id} product`;
  }

  @Post()
   //we are using TS for that we should specify the type of body
  create(@Body() body: any) {
    return body;
    
  }

  //PUT : update the entire object
  //PATCH : update only single property of the object

  @Patch(':id')
  Update(@Param('id') id: string , @Body() body:any){

  return `this action updates product ${id}`;

  }
 //make sure using Delete decorator 
  @Delete(':id')
  remove(@Param('id') id : string) {

    return `this action delete product ${id}`
  }



}
