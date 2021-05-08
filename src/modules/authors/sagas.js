import { call, put, takeLatest } from 'redux-saga/effects'
import { getOwnerData as getOwnerDataAPI } from 'modules/authors/services'
import {
  GET_OWNER_DATA_REQUESTED,
} from 'modules/authors/actionTypes'
import {
  getOwnerDataSucceeded,
  getOwnerDataFailed
} from 'modules/authors/actions'

function* getOwnerData({ payload }) {
   try {
      const ownerData = yield call(getOwnerDataAPI, { ...payload });
      yield put(getOwnerDataSucceeded(ownerData));
   } catch (e) {
      yield put(getOwnerDataFailed(e));
   }
}

function* mySaga() {
  yield takeLatest(GET_OWNER_DATA_REQUESTED, getOwnerData);
}

export default mySaga;
