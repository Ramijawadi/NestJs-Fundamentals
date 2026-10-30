import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //those pipe allow us to use validation decorators in our DTOs
  app.useGlobalPipes(new ValidationPipe({

   whitelist: false,   //remove extra properties not defined in the DTO and create the record 
   //in the case when whitelist is false , forbid have no effect since the whitelist checking is disabled 

   forbidNonWhitelisted: true, // instaed of removing the extra properties , it reject the request with 400 error .
  }))  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
