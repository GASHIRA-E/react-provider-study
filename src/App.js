import React from 'react';

import {TodoProvider} from './contexts/Todo';
import TodoPage from './components/TodoPage';
import DoneTodo from './components/DoneTodo';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoPage />
        <DoneTodo />
      </TodoProvider>
    </div>
  );
}

export default App;
