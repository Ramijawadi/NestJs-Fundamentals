
  import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

   export class CreateProductsDto {


   @IsString()     
   readonly name:string ;
   @IsNotEmpty()
   @IsInt()
   readonly  price: number ;
  
   @IsOptional()
   @IsNumber({}, { message: 'Stock must be a number' })
   readonly stock : number;

}

// we have so many validators available in class-validator package 
