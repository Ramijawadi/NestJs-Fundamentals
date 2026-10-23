import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

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
  @HttpCode(HttpStatus.GONE)
   //we are using TS for that we should specify the type of body
  create(@Body() body: any) {
    return body;
    
  }
}
