import { NestFactory } from '@nestjs/core';
import { Logger, InternalServerErrorException } from '@nestjs/common';
import { AppModule } from './app.module';
import { PORT } from './config';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      cors: true,
      abortOnError: false,
    });
    await app.listen(PORT, () =>
      Logger.log(`🚀 App listening on the port ${PORT}`),
    );
  } catch (error) {
    Logger.error(`❌  Error starting server, ${error}`, '', '', false);
    throw new InternalServerErrorException(error);
  }
}

bootstrap();
