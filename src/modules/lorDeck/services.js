import { apiCall }from 'utils/fetchUtils'
import { BACK_SERVICE_URL } from 'envVariables'

export const getallCards = (data) => {
  const url = `${BACK_SERVICE_URL}/LOR/cards/all`
  return apiCall({
    url,
    method: 'GET'
  })
  .then(json => {
    return {
      cards: json
    }
  })
}
