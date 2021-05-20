import { all } from 'redux-saga/effects'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from 'store/mainReducer'
import authorSagas from 'modules/authors/sagas'
import lorDeckSagas from 'modules/lorDeck/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

function *rootSagas() {
  yield all([
    authorSagas(),
    lorDeckSagas()
  ])
}

sagaMiddleware.run(rootSagas)

export default store;
