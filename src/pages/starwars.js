import React from "react"
const Swapi = () => (
  <div>
    <h1>People and ships from the films</h1>
  </div>
)
export default Swapi

export const query = graphql`
  query allNodesSwapi {
    allNodesSwapi {
      edges {
         node {
           results{
             name
           }
         }
      }
    }
  }
`
