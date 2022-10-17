import express from "express";
import { v4 as uuidV4 } from "uuid";
import router from './routes';

const app = express();
app.use(express.json());

app.use(router);
const users = []
// app.post("/users", (request, response) => {
//   const { name, email, password } = request.body;

//   const user = {
//     id: uuidV4(),
//     name,
//     email,
//     isAdmin: false,
//     password
//   }
//   const userAlreadyExists = users.find(user => user.email === email);
//   if (userAlreadyExists) {
//     return response.status(403).json({ message: "User already exists!" });
//   }
//   users.push(user);

//   return response.status(201).send(user);
// });

// app.get("/users", (request, response) => {
//   return response.json(users);
// })

app.listen("3333", () => {
  console.log("Server running!");
});
