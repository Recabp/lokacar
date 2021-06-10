import ImportCategoryController from './ImportCatefogoryUseCase';
import ImportCategoryUseCase from './ImportCategoryController';

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
);

export default importCategoryController;
