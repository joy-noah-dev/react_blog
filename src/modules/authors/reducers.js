import {
  GET_OWNER_DATA_REQUESTED,
  GET_OWNER_DATA_SUCCEEDED,
  GET_OWNER_DATA_FAILED
} from 'modules/authors/actionTypes'

const initialState = {
  owner: {
    picture: {
      url: ''
    }
  },
  fetching: false
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_OWNER_DATA_REQUESTED:
      return {
        ...state,
        ...payload,
        fetching: true
      }
    case GET_OWNER_DATA_SUCCEEDED:
      return {
        ...state,
        ...payload,
        fetching: false
      }
    case GET_OWNER_DATA_FAILED:
    return {
      ...state,
      ...initialState,
      fetching: false
    }
    default:
      return state
  }
}
