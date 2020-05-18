import { ApolloServer } from "apollo-server-micro"
import { getConnection } from "db"
import resolvers from "graphql/resolvers"
import typeDefs from "graphql/schema"

// next.js bodyparser off
export const config = {
  api: {
    bodyParser: false,
  },
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    const dbConn = await getConnection()
    return { dbConn }
  },
  playground: true,
  introspection: true,
  debug: true,
})
// ! path duplicates known route
export default apolloServer.createHandler({ path: "/api/graphql" })
