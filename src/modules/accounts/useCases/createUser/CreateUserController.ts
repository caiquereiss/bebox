import { Request, Response } from "express";
import CreateUserUseCase from "./CreateUserUseCase";

export default class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {

  }
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    console.log('Cheguei no controler')
    this.createUserUseCase.execute({
      name,
      email,
      password
    });
    console.log('depois do execute')
    return response.status(201).send();
  }
}
