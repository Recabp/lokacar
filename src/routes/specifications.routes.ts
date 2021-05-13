import SpecificationsRespository from '@modules/cars/repositories/SpecificationsRepository';
import CreateSpecificationService from '@modules/cars/services/CreateSpecificationService';
import { Router } from 'express';

const specificationRoutes = Router();

const specificationsRepository = new SpecificationsRespository();

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationsService = new CreateSpecificationService(
    specificationsRepository,
  );

  createSpecificationsService.execute({ name, description });

  return response.status(201).send();
});

export default specificationRoutes;
