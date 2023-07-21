import { combineReducers } from 'redux';
import  {usersReducer}  from './userReducer';
import { tweetReducer } from './tweetReducer';


export const reducers = combineReducers({
  usersReducer,tweetReducer
});