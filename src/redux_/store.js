

import reducers from '/reducers.js'

import {createStore} from './redux'


const initialState = []
const store = createStore (reducers , initialState);

export default store;