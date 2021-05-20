import authors from 'modules/authors/reducers'
import lorDeck from 'modules/lorDeck/reducers'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  authors,
  lorDeck
})

export default reducer
