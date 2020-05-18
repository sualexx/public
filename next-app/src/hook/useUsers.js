import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

export default function useUsers(skip = 0, limit = 50) {
  return useQuery(
    gql`
        query {
            users(skip: ${skip}, limit: ${limit}) {
                id
                email
                name
            }
        }
    `
  )
}
