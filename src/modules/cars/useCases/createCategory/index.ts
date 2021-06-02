import CategoriesRepository from '@modules/cars/repositories/implementations/CategoriesRepository';
import CreateCategoryController from './CreateCategoryController';
import CreateCategoryUseCase from './CreateCategoryUseCase';

const categoriesRepository = new CategoriesRepository();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

export default createCategoryController;
