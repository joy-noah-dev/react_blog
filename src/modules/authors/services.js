import { graph_request } from 'utils/graphql-utils.js'
import { CMS_GRAPH_URL } from 'envVariables'

export const getOwnerData = (data) => {
  const url = CMS_GRAPH_URL
  const query = `
  query {
    authors(where: {type: "Owner"}) {
      id
      name
      biography
      picture {
        url
      }
    }
  }
  `
  return graph_request({ url, query })
  .then(res => {
    return {
      owner: res.authors[0]
    }
  })
}
