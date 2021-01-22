import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Feed, FeedDocument } from './feed.model';

@Injectable()
export class FeedService {
  constructor(@InjectModel(Feed.name) private feedModel: Model<FeedDocument>) {}

  async add(content) {
    await this.feedModel.create({ content });
  }

  async count() {
    const count = await this.feedModel.countDocuments();
    return count;
  }
}
