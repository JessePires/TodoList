import reducerTodos from './todos';
import reducerVisibilityFilter from './visibilityFilter';

// this will be the App state
const mainReducer = (state = {}, action) => {
  return {
    // return all of the todos to the todos prop
    todos: reducerTodos(state.todos, action), 
    
    // return the visibility filter to visibilityFilter prop
    visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action), 
  };
};

export default mainReducer;
