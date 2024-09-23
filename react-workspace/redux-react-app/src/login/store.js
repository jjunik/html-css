import {createStore} from 'redux'
import authReducer from './reducer'
import store from '../redux/store'

const sotre = createStore(authReducer)

export default store