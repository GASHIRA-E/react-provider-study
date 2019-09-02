import React, {useState} from 'react';

const defaultState = {
  todo: []
};

const TodoContext = React.createContext(defaultState);

export const TodoProvider = ({children}) => {

  const [todo, setTodo] = useState(defaultState.todo);

  const addTodo = (title) => {
    setTodo([...todo, {
      title,
      status: false,
      index: todo.length
    }]);
  }

  const toggleTodo = (index) => {
    const afterTodo = todo.concat();
    afterTodo[index].status = !afterTodo[index].status;
    setTodo(afterTodo);
  }

  return (
    <TodoContext.Provider value={{todo, addTodo, toggleTodo}}>
      {children}
    </TodoContext.Provider>
  )
}

export const {Consumer} = TodoContext;
