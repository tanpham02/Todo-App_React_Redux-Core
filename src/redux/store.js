import { legacy_createStore as createStore } from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from '@redux-devtools/extension'

const composeEnhancer = composeWithDevTools()

//createStore(rootReducer, initState, enhancers(nó đơn giản là những cái middleware như redux-thunk, redux-saga,...))
const store = createStore(rootReducer, composeEnhancer)

export default store

