import SpecificationsRespository from '@modules/cars/repositories/implementations/SpecificationsRepository';
import CreateSpecificationController from './CreateSpecificationController';
import CreateSpecificationUseCase from './CreateSpecificationUseCase';

const specificationsRepository = new SpecificationsRespository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository,
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
);

export default createSpecificationController;
