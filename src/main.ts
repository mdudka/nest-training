import {NestFactory} from "@nestjs/core";

import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


async function  start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const swaggerConfig = new DocumentBuilder()
        .setTitle('Nestjs Tutorial')
        .setDescription('REST API Documentation')
        .setVersion('1.0.0')
        .addTag('App')
        .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))
}

start();