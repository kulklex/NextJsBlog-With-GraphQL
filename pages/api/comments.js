// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHICS_ENDPOINT
const token = process.env.GRAPH_TOKEN

export default async function comments(req, res) {
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) {id}
    } 
    `
    try {
      
    const result = await graphQLClient.request(query, req.body)

    return res.status(201).send(result)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
}
