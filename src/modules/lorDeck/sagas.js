import { call, put, takeLatest } from 'redux-saga/effects'
import { getallCards as getallCardsAPI } from 'modules/lorDeck/services'
import {
  GET_ALL_CARDS_REQUESTED,
} from 'modules/lorDeck/actionTypes'
import {
  getAllCardsSucceeded,
  getAllCardsFailed
} from 'modules/lorDeck/actions'

function* getallCards({ payload }) {
   try {
      const ownerData = yield call(getallCardsAPI, { ...payload });
      yield put(getAllCardsSucceeded(ownerData));
   } catch (e) {
      yield put(getAllCardsFailed(e));
   }
}

function* mySaga() {
  yield takeLatest(GET_ALL_CARDS_REQUESTED, getallCards);
}

export default mySaga;
