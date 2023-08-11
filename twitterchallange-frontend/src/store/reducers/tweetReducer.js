import {homePageResetIncrease,homePageResetDecrease} from '../actions/tweetAction'

const initialState = {
  buttonCount:0,
};

export function tweetReducer (state=initialState,action){
    switch(action.type){
      case homePageResetIncrease:
        return {
          buttonCount : Number(state.buttonCount)+1
        }
      case homePageResetDecrease:
      return {
        buttonCount : Number(state.buttonCount)-1
      }
      default:
        return state;
    }
}