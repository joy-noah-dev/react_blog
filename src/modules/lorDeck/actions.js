import {
  GET_ALL_CARDS_REQUESTED,
  GET_ALL_CARDS_SUCCEEDED,
  GET_ALL_CARDS_FAILED
} from 'modules/lorDeck/actionTypes'

export const getAllCardsRequested = (payload = {}) => ({
  type: GET_ALL_CARDS_REQUESTED,
  payload,
})

export const getAllCardsSucceeded = (payload = {}) => ({
  type: GET_ALL_CARDS_SUCCEEDED,
  payload,
})

export const getAllCardsFailed = (payload = {}) => ({
  type: GET_ALL_CARDS_FAILED,
  payload,
})
