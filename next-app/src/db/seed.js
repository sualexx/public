import faker from "faker"
import UserModel from "./models/user"

require("dotenv").config()

require("./index")
  .getConnection()
  .then(conn => {
    const User = UserModel(conn)
    const users = []
    for (let i = 0; i < 500; i += 1) {
      const name = faker.name.firstName()
      const lastName = faker.name.lastName()
      const email = faker.internet.email(name, lastName)
      users.push({ name, email })
      console.log(email)
    }
    User.insertMany(users).then(() => {
      console.log("-------------------------------- seeded")
    })
  })
