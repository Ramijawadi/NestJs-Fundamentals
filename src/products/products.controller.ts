import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    //if we wanna use nested URL for this specific  Get request 
 @Get('clothes')

   findAll()
{

    return 'this actions return all products'
}
}
