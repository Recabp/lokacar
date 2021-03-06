import CategoriesRepository from '@modules/cars/repositories/implementations/CategoriesRepository';
import ListCategoriesController from './ListCaregoriesController';
import ListCategoriesUseCase from './ListCategoriesUseCase';

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);

export default listCategoriesController;
