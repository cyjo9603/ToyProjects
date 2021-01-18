import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';

@Injectable()
export class UploadService {
  private s3: AWS.S3;
  private IMAGE_LIMIT = 3145728;

  constructor(private readonly configService: ConfigService) {
    this.s3 = new AWS.S3({
      endpoint: configService.get('STORAGE_END_POINT'),
      region: 'kr-standard',
      credentials: {
        accessKeyId: configService.get('ACCESS_KEY'),
        secretAccessKey: configService.get('SECRET_KEY'),
      },
    });
  }

  async uploadObject(image) {
    try {
      if (image.size > this.IMAGE_LIMIT) return false;
      const imageName = `${Date.now()}${image.originalname}`;
      await this.s3
        .putObject({
          Bucket: this.configService.get('BUCKET_NAME'),
          Key: imageName,
          ACL: 'public-read',
          Body: image.buffer,
        })
        .promise();
      return `${this.configService.get('STORAGE_END_POINT')}/${this.configService.get(
        'BUCKET_NAME',
      )}/${imageName}`;
    } catch {
      return false;
    }
  }
}
