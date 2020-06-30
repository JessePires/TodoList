import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../redux-flow/reducers/todos/actionCreators';
import * as filterActions from '../../redux-flow/reducers/visibilityFilter/actions';

const ToDosList = ({ todos, activeFilter,  handleToggleTodo }) => (
  <ul>
    {getVisibleTodos(todos, activeFilter).map((todo) => (
        <li 
          key={ todo.id }
          style={{ textDecoration: todo.completed ? 'line-through' :'none' }}
          onClick={ handleToggleTodo(todo.id) }
        >
          { todo.text }
        </li>
      )
    )}
  </ul>
);

const getVisibleTodos = (todos, activeFilter) => {
  const filterItems = {
    [filterActions.SHOW_ALL]: todos,
    [filterActions.SHOW_COMPLETED]: todos.filter((todo) => todo.completed),
    [filterActions.SHOW_ACTIVE]: todos.filter((todo) => !todo.completed)
  };

  return filterItems[activeFilter];
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  activeFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleTodo: (id) => (e) => {
    dispatch(toggleTodo(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDosList);
