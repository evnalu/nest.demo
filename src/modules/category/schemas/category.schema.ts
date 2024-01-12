import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false, collection: 'category' })
export class Category {
  @Prop({ type: String, required: true })
  ename: String;

  @Prop({ type: String, required: true })
  name: String;

  @Prop({ type: String, required: false })
  desc: String;

  @Prop({ type: Boolean, default: false })
  archived: boolean;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export type CategoryDocument = Category & Document;

export const CategorySchema = SchemaFactory.createForClass(Category);

CategorySchema.index({ ename: 1 }, { unique: true });
CategorySchema.index({ name: 1 });
CategorySchema.index({ archived: 1 });
CategorySchema.index({ createdAt: -1 });
CategorySchema.index({ updatedAt: -1 });
