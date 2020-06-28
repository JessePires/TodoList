import Todos, { initialState } from './index';
import deepFreeze from 'deep-freeze';
import { ADD_TODO, TOGGLE_TODO } from './actions';

it('Todos should be a function', () => {
  expect(Todos).toBeInstanceOf(Function);
});

it('should add a todo item', () => {
  const before = deepFreeze([]);
  
  const action = deepFreeze(
    { 
      type: ADD_TODO,
      payload: {
        id: 0,
        text: 'Hey'
      },
    }
  );
  
  const after = [{
    id: 0,
    text: 'Hey',
    completed: false,
  }];

  expect(Todos(before, action)).toStrictEqual(after);
});


it('should add a new todo item', () => {
  const before = deepFreeze([
    {
      id: 0,
      text: 'Hey',
      completed: false,
    }
  ]);
  
  const action = deepFreeze(
    { 
      type: ADD_TODO,
      payload: {
        id: 1,
        text: 'Ho'
      },
    }
  );
  
  const after = [
    {
      id: 0,
      text: 'Hey',
      completed: false,
    },
    {
      id: 1,
      text: 'Ho',
      completed: false,
    },
  ];

  expect(Todos(before, action)).toStrictEqual(after);
});

it('should toggle first todo', () => {
  const before = deepFreeze([
    {
      id: 0,
      text: 'Hey',
      completed: false,
    },
    {
      id: 1,
      text: 'Ho',
      completed: false,
    }
  ]);

  const action = deepFreeze({
    type: TOGGLE_TODO,
    payload: {
      id: 0,
    },
  });

  const after = [
    {
      id: 0,
      text: 'Hey',
      completed: true,
    },
    {
      id: 1,
      text: 'Ho',
      completed: false,
    }
  ];

  expect(Todos(before, action)).toStrictEqual(after);
});

it('should toggle second todo', () => {
  const before = deepFreeze([
    {
      id: 0,
      text: 'Hey',
      completed: false,
    },
    {
      id: 1,
      text: 'Ho',
      completed: false,
    }
  ]);

  const action = deepFreeze({
    type: TOGGLE_TODO,
    payload: {
      id: 1,
    },
  });

  const after = [
    {
      id: 0,
      text: 'Hey',
      completed: false,
    },
    {
      id: 1,
      text: 'Ho',
      completed: true,
    }
  ];

  expect(Todos(before, action)).toStrictEqual(after);
});

it('should return the latest state when action is unknown', () => {
  const before = deepFreeze([
    {
      id: 0,
      text: 'Hey',
      completed: false,
    }
  ]);

  const action = deepFreeze({ type: 'ANYTHING' });

  const after = [
    {
      id: 0,
      text: 'Hey',
      completed: false,
    }
  ];

  expect(Todos(before, action)).toStrictEqual(after);
});

it('should return initialState when before state is undefined', () => {
  const before = undefined;
  const action = deepFreeze({});
  const after = initialState;

  expect(Todos(before, action)).toStrictEqual(after);
});
