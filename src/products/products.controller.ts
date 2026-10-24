import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { ProductsService } from './products.service';



//we called all methods/services in our controller through the ProductsService instance
@Controller('products')
export class ProductsController {
   // we create this instance to use in our project 
  constructor ( private readonly productsService:ProductsService){}
   
  @Get()
  //Will try to use Response here 
  findAll() {

    

     return this.productsService.findAll();  // we call our service here 
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `this action return ${id} product`;
    return this.productsService.findOne(+id);
  }

  @Post()
   //we are using TS for that we should specify the type of body
  create(@Body() body: any) {
    return  this.productsService.create(body);
    
  }

  //PUT : update the entire object
  //PATCH : update only single property of the object

  @Patch(':id')
  Update(@Param('id') id: string , @Body() body:any){

return this.productsService.update(+id, body);
    
  }
 //make sure using Delete decorator 
  @Delete(':id')
  remove(@Param('id') id : string) {

   return this.productsService.remove(+id);
     
  }



}
