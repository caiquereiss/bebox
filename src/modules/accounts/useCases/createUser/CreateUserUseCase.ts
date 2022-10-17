import IUsersRepository from "../../repositories/IUsersRepository";
import { hash } from "bcryptjs"


interface IRequest {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  async execute({
    name,
    email,
    password

  }: IRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash
    });
  }
}
