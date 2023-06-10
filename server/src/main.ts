import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { CORS } from './constants/cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //use morgan
  app.use(morgan('dev'));

  // Validation pipe for all requests
  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Get config service
  const configService = app.get(ConfigService);

  // Enable CORS
  app.enableCors(CORS);

  // Set prefix
  app.setGlobalPrefix('api');

  await app.listen(configService.get('PORT'));
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
