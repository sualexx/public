import { ApolloError } from "apollo-server-micro"
import UserModel from "db/models/user"

export default {
  Query: {
    user: async (parent, args, context) => {
      const User = UserModel(context.dbConn)
      try {
        return await User.findById(args._id).exec()
      } catch (error) {
        throw new ApolloError(`Error getting user ${args._id}`)
      }
    },
    users: async (parent, { skip, limit }, context) => {
      const User = UserModel(context.dbConn)
      try {
        return await User.find({}).skip(skip).limit(limit).exec()
      } catch (error) {
        throw new ApolloError(`Error getting users`)
      }
    },
  },
  Mutation: {
    createUser: async (parent, { input: { email, name } }, context, info) => {
      const User = UserModel(context.dbConn)
      try {
        const user = new User({ email, name })
        return await user.save()
      } catch (error) {
        console.log(error)
        throw new ApolloError("Error creating note")
      }
    },
    updateUser: async (parent, { id, input: { email, name } }, context, info) => {
      const User = UserModel(context.dbConn)
      try {
        return await User.findByIdAndUpdate(id, { email, name }, { new: true })
      } catch (error) {
        throw new ApolloError("Error creating note")
      }
    },
    deleteUser: async (parent, { id }, context, info) => {
      const User = UserModel(context.dbConn)
      try {
        return await User.findOneAndRemove({ _id: id })
      } catch (error) {
        console.log(error)
        throw new ApolloError("Error creating note")
      }
    },
  },
}
