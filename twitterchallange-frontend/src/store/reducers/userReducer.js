import {GET_USER_LIST} from '../actions/userAction'

const initialState =[];

export function usersReducer(state = initialState,action){
  switch (action.type){
    case GET_USER_LIST:
      return[...action.payload];

    default:
      return state;

  }

}