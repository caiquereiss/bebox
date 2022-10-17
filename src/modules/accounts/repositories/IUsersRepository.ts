import User from "../entities/User";

export interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  // isAdmin: boolean;
  avatar?: string;
  // created_at: string;
}
export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
}
