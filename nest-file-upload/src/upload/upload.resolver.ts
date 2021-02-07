import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { CoreResponse } from './dto/core.dto';
import { UploadResponse } from './scalars/upload.dto';
import { UploadScalar } from './scalars/upload.scalar';
import { UploadService } from './upload.service';

@Resolver()
export class UploadResolver {
  constructor(private uploadService: UploadService) {}

  @Query((returns) => CoreResponse)
  hello() {
    return { result: true };
  }

  @Mutation((returns) => UploadResponse)
  async upload(@Args('file') file: UploadScalar): Promise<UploadResponse> {
    const path = await this.uploadService.uploadObject(file);
    return { path };
  }
}
