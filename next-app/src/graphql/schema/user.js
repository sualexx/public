import { gql } from "apollo-server-micro"

export default gql`
  type Query {
    user(id: ID!): User!
    users(skip: Int = 0, limit: Int = 10): [User]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!
    deleteUser(id: ID!): User!
  }

  type User {
    id: ID!
    email: EmailAddress!
    name: String!
  }

  input CreateUserInput {
    email: EmailAddress!
    name: String!
  }

  input UpdateUserInput {
    email: EmailAddress
    name: String
  }
`
