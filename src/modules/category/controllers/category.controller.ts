import { Controller } from '@nestjs/common';
import { DocBaseController } from '@evnalu/nest.common';
import { CategoryService } from '../services';
import { CategoryDocument } from '../schemas';

@Controller('categories')
export class CategoryController extends DocBaseController<CategoryDocument> {
  constructor(private readonly categoryService: CategoryService) {
    super(categoryService);
  }
}
