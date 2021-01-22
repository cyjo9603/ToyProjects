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

  async find(hidePost: number) {
    const feeds = await this.feedModel
      .find({})
      .sort({ _id: -1 })
      .skip(hidePost)
      .limit(10);
    return feeds;
  }

  paging(page = 1, total: number) {
    const maxPost = 10;
    const maxPage = 10;
    const hidePost = page === 1 ? 0 : (page - 1) * maxPost;
    const totalPage = Math.ceil(total / maxPost);
    const startPage = Math.floor((page - 1) / maxPage) * maxPage + 1;
    const endPage =
      startPage + maxPage - 1 > totalPage ? totalPage : startPage + maxPage - 1;
    return { hidePost, startPage, endPage };
  }
}
