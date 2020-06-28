import { ADD_TODO, TOGGLE_TODO } from './actions';

export const initialState = [];

const Todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: 
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      })

    case TOGGLE_TODO:
      return state.map((todo) => {
        return todo.id !== action.payload.id 
          ? todo
          : { ...todo, completed: !todo.completed } //return todo with completed value changed
      });

    default: return state
  }
};

export default Todos;
