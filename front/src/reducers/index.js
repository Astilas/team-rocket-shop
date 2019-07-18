import { combineReducers } from 'redux';
// users et logs sont des reducers que l'on va combiner
import usersReducer from './users';
import logsReducer from './logs';
import ALRequestReducer from './ALRequest';
import APProposeReducer from './APPropose';
// Reducer

const reducer = combineReducers({
  users: usersReducer,
  logs: logsReducer,
  ALRequest: ALRequestReducer,
  APPropose: APProposeReducer
});


export default reducer;
