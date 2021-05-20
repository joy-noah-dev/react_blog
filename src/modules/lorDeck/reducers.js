import {
  GET_ALL_CARDS_REQUESTED,
  GET_ALL_CARDS_SUCCEEDED,
  GET_ALL_CARDS_FAILED
} from 'modules/lorDeck/actionTypes'

const initialState = {
  cards: [],
  fetching: false
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_CARDS_REQUESTED:
      return {
        ...state,
        ...payload,
        fetching: true
      }
    case GET_ALL_CARDS_SUCCEEDED:
      return {
        ...state,
        ...payload,
        fetching: false
      }
    case GET_ALL_CARDS_FAILED:
    return {
      ...state,
      ...initialState,
      fetching: false
    }
    default:
      return state
  }
}
