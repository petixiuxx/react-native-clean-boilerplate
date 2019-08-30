import {combineReducers} from 'redux';
import homeReducers from '../../scenes/Home/store/reducers';

const createReducer = asyncReducers =>
  combineReducers({
    homeReducers,
    ...asyncReducers,
  });

export default createReducer;
