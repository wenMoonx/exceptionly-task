import { NestFactory } from '@nestjs/core';
import { Logger, InternalServerErrorException } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PORT } from './config';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      cors: true,
      abortOnError: false,
    });

    const config = new DocumentBuilder()
      .setTitle('Exceptionly-Task')
      .setDescription('NestJS API for Exceptionly Frontend')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(PORT, () =>
      Logger.log(`🚀 App listening on the port ${PORT}`),
    );
  } catch (error) {
    Logger.error(`❌  Error starting server, ${error}`, '', '', false);
    throw new InternalServerErrorException(error);
  }
}

bootstrap();
