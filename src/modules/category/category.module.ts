import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Category,
  CategorySchema,
} from './schemas';
import {
  CategoryService,
} from './services';
import {
  CategoryController,
} from './controllers';
import { MongodbConnectionNames } from '../../shared/constants';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: Category.name, schema: CategorySchema },
      ],
      MongodbConnectionNames.demo,
    ),
  ],
  providers: [
    CategoryService,
  ],
  controllers: [
    CategoryController,
  ],
  exports: [
    CategoryService,
  ],
})
export class CategoryModule { }
