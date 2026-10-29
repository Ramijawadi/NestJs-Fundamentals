import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';


//will try to organize the Products module 
//encapsulate their own provider + controller for cleaner architecture

@Module({

  providers:[ProductsService],
  controllers : [ProductsController]

})
export class ProductsModule {}
