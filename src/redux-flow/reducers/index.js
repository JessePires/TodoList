import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

/* BASICALLY, THIS IS HOW combineReducers WORKS
*
* const combineReducers = (reducers) => (state = {}, action) => {
*  return Object.keys(reducers).reduce((nextState, key) => {
*    return {
*      ...nextState,
*      [key]: reducers[key](state[key], action)
*    }
*  }, {});
* };
*/

// this will be the App state
export default combineReducers({
  // return all of the todos to the todos prop
  todos,

  // return the visibility filter to visibilityFilter prop
  visibilityFilter,
});
