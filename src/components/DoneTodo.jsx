import React from 'react';

import { Consumer } from '../contexts/Todo';
import styled from 'styled-components';

export default (props) => {
  return (
    <>
      <h3>Done Todo</h3>
      <ul>
        <Consumer>
          {({todo}) => (
            <>
            {todo.filter(t => t.status).map((t, i) => (
              <ListItem key={`ls_${i}`}>
                <Text>{t.title}</Text>
              </ListItem>
            ))}
            </>
          )}
        </Consumer>
      </ul>
    </>
  )
}

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;
`;
