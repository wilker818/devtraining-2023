import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Configuração global de pipes para a aplicação NestJS
    app.useGlobalPipes(
        // Utiliza o ValidationPipe para validar e transformar automaticamente os dados das requisições
        new ValidationPipe({
            // Remove propriedades não autorizadas dos objetos validados
            whitelist: true,

            // Rejeita a requisição se houver propriedades não autorizadas
            forbidNonWhitelisted: true,

            // Realiza a transformação automática dos tipos dos dados do payload
            transform: true,
        }),
    );

  await app.listen(3000);
}

bootstrap();
