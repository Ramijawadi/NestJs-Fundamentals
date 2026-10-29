
import { PartialType } from "@nestjs/mapped-types";
import { CreateProductsDto } from "../create-products.dto/create-products.dto";

export class UpdateProductDto extends PartialType(CreateProductsDto) {


  
}

//no MOre duplication needed .


//same as create but here properties are optional 
//if you remember , i was copy from the CreateProductDto , a bit redundant bad practice ;