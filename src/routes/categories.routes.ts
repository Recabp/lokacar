import { Router } from "express";

const categoriesRoutes = Router();

const catefories = [];

categoriesRoutes.post("/categories", (request, response) => {
  const { name, description } = request.body;

  catefories.push({
    name,
    description,
  });

  return response.status(201).send();
});

export default categoriesRoutes;
