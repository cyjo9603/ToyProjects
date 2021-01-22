import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class Feed {
  @Field(type => String)
  _id!: string;

  @Field(type => String)
  @Prop({ required: true })
  content!: string;

  @Field(type => Date)
  createdAt!: Date;

  @Field(type => Date)
  updatedAt!: Date;
}

export type FeedDocument = Feed & Document;

export const FeedSchema = SchemaFactory.createForClass(Feed);
