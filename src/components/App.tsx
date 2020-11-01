import React from 'react';
import { ChakraProvider } from '@chakra-ui/core';

import theme from '../theme';
import { useAppState } from '../contexts/AppStateContext';

import AppContainer from './AppContainer';
import Column from './Column';
import AddNewItem from './AddNewItem';

function App() {
  const { state: { lists }, dispatch } = useAppState();

  return (
    <ChakraProvider theme={theme}>
      <AppContainer>
        {lists.map((list, index) => (
          <Column key={list.id} title={list.title} index={index} />
        ))}
        <AddNewItem
          toggleButtonText="+ Add another list"
          toggleButtonProps={{ variant: 'blue' }}
          onAdd={(title) => dispatch({ type: 'CREATE_LIST', payload: title })}
        />
      </AppContainer>
    </ChakraProvider>
  );
}

export default App;
