import Specification from '../models/Specification';
import {
  ISpecificationsRespository,
  ICreateSpecificationDTO,
} from './ISpecificationsRepository';

class SpecificationsRespository implements ISpecificationsRespository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }
}

export default SpecificationsRespository;
