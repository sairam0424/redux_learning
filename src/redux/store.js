// import {createStore} from 'redux'
import { legacy_createStore as createStore , applyMiddleware} from 'redux'

import {thunk} from 'redux-thunk'

import reducer from './reducer.js'

const initialState = [];


const store = createStore(reducer , initialState , applyMiddleware(thunk));

export default store