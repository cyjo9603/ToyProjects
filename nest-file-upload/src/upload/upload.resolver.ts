import { Resolver, Query } from '@nestjs/graphql';

import { CoreResponse } from './dto/core.dto';
import { UploadService } from './upload.service';

@Resolver()
export class UploadResolver {
  constructor(private uploadService: UploadService) {}

  @Query((returns) => CoreResponse)
  hello() {
    return { result: true };
  }
}
