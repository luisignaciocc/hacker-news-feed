import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop()
  created_at: string;

  @Prop()
  title: string;

  @Prop()
  url: string;

  @Prop()
  author: string;

  @Prop()
  points: string;

  @Prop()
  story_text: string;

  @Prop()
  comment_text: string;

  @Prop()
  num_comments: number;

  @Prop()
  story_id: number;

  @Prop()
  story_title: string;

  @Prop()
  story_url: string;

  @Prop()
  parent_id: number;

  @Prop()
  created_at_i: number;

  @Prop({ required: true, index: true })
  objectID: string;

  @Prop({ default: false })
  is_deleted: boolean;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
