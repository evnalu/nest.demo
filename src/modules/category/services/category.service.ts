import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongooseService, Logger } from '@evnalu/nest.common';
import { Category, CategoryDocument } from '../schemas/category.schema';
import { MongodbConnectionNames } from '../../../shared/constants';

const { log, err } = Logger('user:services:user');

@Injectable()
export class CategoryService extends MongooseService<CategoryDocument> {
  public constructor(
    @InjectModel(Category.name, MongodbConnectionNames.demo)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {
    super(categoryModel);
  }
}
