import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';

@Injectable()
export class UploadService {
  private s3: AWS.S3;

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
      const { createReadStream, filename, mimetype } = image.file;
      const stream = createReadStream();

      const imageName = `${Date.now()}${filename}`;
      await this.s3
        .putObject({
          Bucket: this.configService.get('BUCKET_NAME'),
          Key: imageName,
          ACL: 'public-read',
          Body: stream.read(),
          ContentType: mimetype,
        })
        .promise();
      return `${this.configService.get('STORAGE_END_POINT')}/${this.configService.get(
        'BUCKET_NAME',
      )}/${imageName}`;
    } catch (error) {
      return '';
    }
  }
}
