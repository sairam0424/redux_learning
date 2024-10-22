// import {createStore} from 'redux'
import { legacy_createStore as createStore} from 'redux'

import reducer from './reducer.js'

const initialState = [];

const store = createStore(reducer , initialState);

export default store