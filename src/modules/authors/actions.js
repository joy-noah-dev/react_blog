import {
  GET_OWNER_DATA_REQUESTED,
  GET_OWNER_DATA_SUCCEEDED,
  GET_OWNER_DATA_FAILED
} from 'modules/authors/actionTypes'

export const getOwnerDataRequested = (payload = {}) => ({
  type: GET_OWNER_DATA_REQUESTED,
  payload,
})

export const getOwnerDataSucceeded = (payload = {}) => ({
  type: GET_OWNER_DATA_SUCCEEDED,
  payload,
})

export const getOwnerDataFailed = (payload = {}) => ({
  type: GET_OWNER_DATA_FAILED,
  payload,
})
