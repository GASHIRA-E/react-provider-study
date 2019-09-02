import React, {useState} from 'react';

import { Consumer } from '../contexts/Todo';
import styled from 'styled-components';

export default (props) => {

  const [text, setText] = useState('');

  return (
    <ul>
      <Consumer>
        {({todo, addTodo, toggleTodo}) => (
          <>
            <InputText name="input" value={text} onChange={v => setText(v.currentTarget.value)} />
            <AddButton onClick={() => addTodo(text)}>Todoを追加する</AddButton>
            {todo.filter(t => !t.status).map((t, i) => (
              <ListItem key={`ls_${i}`}>
                <input type="checkbox" name={`check_${i}`} checked={t.status} onChange={_ => toggleTodo(t.index)}/>
                <Text>{t.title}</Text>
              </ListItem>
            ))}
          </>
        )}
      </Consumer>
    </ul>
  )
};

const InputText = styled.input`
  border: 1px solid black;
  display: block;
`;
const AddButton = styled.button`
  display: block;
  padding: 6px;
  border-radius: 4px;
  background-color: green;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;
`;
