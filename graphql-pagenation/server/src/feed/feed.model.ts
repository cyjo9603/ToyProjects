import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Feed {
  @Field(type => String)
  @Prop({ _id: true })
  _id!: string;

  @Field(type => String)
  @Prop({ required: true })
  content!: string;
}

export type FeedDocument = Feed & Document;

export const FeedSchema = SchemaFactory.createForClass(Feed);
