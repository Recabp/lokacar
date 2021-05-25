import { Request } from 'express';

class ListCateforiesController {
  handle(request: Request, response: Response): Response {
    const all = categoriesRepository.list();

    return response.json(all);
  }
}
