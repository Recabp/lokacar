import Category from '../models/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  categories: Category[] = [];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }
}

export default CategoriesRepository;
