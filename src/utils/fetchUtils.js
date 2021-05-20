export const apiCall = ({url, method}) => {
  return fetch(
    url,
    {
      method: method,
      mode: 'cors'
    })
    .then(res => {
      return res.json()
    })
    .catch(error => {
      throw new Error()
    })
}
