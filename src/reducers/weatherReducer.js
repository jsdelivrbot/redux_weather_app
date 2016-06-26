
import { FETCH_API } from '../actions/index';

export default function weatherReducer(state = [], action){
  switch(action.type){
    case FETCH_API:
      return [ action.payload.data, ...state ];

      default:

        return state;

  }

}
