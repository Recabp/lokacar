interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRespository {
  create({ name, description }: ICreateSpecificationDTO): void;
}

export { ISpecificationsRespository, ICreateSpecificationDTO };
