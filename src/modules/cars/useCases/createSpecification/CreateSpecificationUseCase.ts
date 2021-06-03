import { ISpecificationsRespository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRespository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(
      name,
    );

    if (specificationAlreadyExists) {
      throw new Error('Specifications Already Exists!');
    }
    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export default CreateSpecificationUseCase;
