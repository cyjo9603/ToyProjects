import { Module } from '@nestjs/common';
import { UploadResolver } from './upload.resolver';
import { UploadService } from './upload.service';
import { UploadScalar } from './scalars/upload.scalar';

@Module({
  providers: [UploadResolver, UploadService, UploadScalar],
})
export class UploadModule {}
