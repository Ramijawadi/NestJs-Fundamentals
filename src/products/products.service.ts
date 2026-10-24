import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  // will add some fake data just to test 
    private  products:Product[] = [

  {
    id:1,
    name: 'Product 1',
    price: 100,
    stock: 10

     
  },

  {

    id:2,
    name: 'Product 2',
    price: 150,
    stock: 30

  }

    ] ;  // this will be like mock data will use for the moment to test 


   //then will create our services one by one 


   findAll() {
       return this.products;  //find and return all products
   }
    

   findOne(id:number) {
       return this.products.find(item => item.id === id);  //find and return product by id
   }

   create(createProductDto:any){

    this.products.push(createProductDto);  //add the new product to the array
   }

   update(id:number , updateProductDto:any){
 const existingProduct = this.findOne(id);
 if (existingProduct){
    
       Object.assign(existingProduct, updateProductDto);
 }
     
   }

   remove(id:number){
 const ProductIndex=  this.products.findIndex(item => item.id === +id) //it remove specific product by id 

 if (ProductIndex >= 0)
    this.products.splice(ProductIndex,1);

   }

}
