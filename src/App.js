import React from 'react';
import Form from './components/form';
import ToDosList from './components/toDosList';
import Filter from './components/filter';

const App = () => (
  <div>
    <Form />

    <ToDosList />

    <Filter />
  </div>
);

export default App;
