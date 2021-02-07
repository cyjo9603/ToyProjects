import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: true,
      cors: { credentials: true, origin: true },
      uploads: {
        maxFieldSize: 10000000,
        maxFiles: 1,
      },
    }),
    UploadModule,
  ],
})
export class AppModule {}
