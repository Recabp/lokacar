import createSpecificationController from '@modules/cars/useCases/createSpecification';
import { Router } from 'express';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

export default specificationRoutes;
