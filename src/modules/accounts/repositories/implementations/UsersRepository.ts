import User from "../../entities/User";
import IUsersRepository, { ICreateUserDTO } from "../IUsersRepository";


export default class UsersRepository implements IUsersRepository {

  private users: User[];

  constructor() {
    this.users = []
  }
  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = new User();
    Object.assign(user, {
      name,
      email,
      password,
      // created_at: new Date(),

    });
    this.users.push(user);

  }
  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);
    return user;
  }
  async findById(id: string): Promise<User> {
    const user = await this.users.find(user => user.id === id);
    return user;
  }


}



// id,
//   name,
//   email,
//   password,
//   isAdmin,
//   avatar,
//   created_at
