import CategoriesRepository from '@modules/cars/repositories/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category Already exists?');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export default CreateCategoryUseCase;
