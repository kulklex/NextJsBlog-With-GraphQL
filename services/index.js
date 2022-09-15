import { request, gql} from "graphql-request"

const graphqlAPI =  process.env.NEXT_PUBLIC_GRAPHICS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                id
                name
                photo {
                  url
                }
                posts {
                  categoryS {
                    name
                    id
                    slug
                  }
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
            }
          }
        }
      }
    `
    const result = await request(graphqlAPI, query)
    return result.postsConnection.edges
}