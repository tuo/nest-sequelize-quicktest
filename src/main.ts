import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  console.log('process.env port', process.env.PORT);
  console.log('port', port);
  await app.listen(port);
  console.log(`server running on port: ${port}`);
}
bootstrap();
