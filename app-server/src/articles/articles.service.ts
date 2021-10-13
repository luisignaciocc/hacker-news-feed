import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from './schemas';
import { CreateArticleDto } from './dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
  ) {}

  async create(createArticleDto: CreateArticleDto) {
    return await this.articleModel.findOneAndUpdate(
      { objectID: createArticleDto.objectID },
      { $set: createArticleDto },
      { upsert: true },
    );
  }

  findAll(): Promise<Article[]> {
    return this.articleModel
      .find({ is_deleted: false })
      .sort('-created_at_i')
      .exec();
  }

  remove(id: string) {
    return this.articleModel.findOneAndUpdate(
      { objectID: id },
      { $set: { is_deleted: true } },
    );
  }
}
