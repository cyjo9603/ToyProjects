import { Controller, Get, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { AppService } from './app.service';
import { UploadService } from './upload/upload.service';
import { uploadContants } from './upload/constants';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly uploadService: UploadService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image', { limits: { fileSize: uploadContants.LIMIT } }))
  async uploadImage(@UploadedFile() file, @Res() res) {
    const result = await this.uploadService.uploadObject(file);

    res.json({ path: result });
  }
}
