import { ADD_TODO, TOGGLE_TODO } from './actions';
import createReducer from '../createReducer';

export const initialState = [];

const Todos = createReducer(initialState, {
  [ADD_TODO]: (state, action) => (
    state.concat({
      id: action.payload,
      text: action.payload.text,
      completed: false
    })
  ),

  [TOGGLE_TODO]: (state, action) => state.map((todo) => (
    todo.id !== action.payload.id 
      ? todo
      : {
        ...todo,
        completed: !todo.completed
      }
    )
  )
});

export default Todos;
