import React from 'react';
import { ChakraProvider } from '@chakra-ui/core';

import theme from '../theme';
import AppContainer from './AppContainer';
import Column from './Column';
import Card from './Card';
import AddNewItem from './AddNewItem';

function App() {
  console.log(theme);
  return (
    <ChakraProvider theme={theme}>
      <AppContainer>
        <Column title="To Do">
          <Card title="Add app state"></Card>
          <Card title="Add new card form"></Card>
        </Column>
        <Column title="In Progress">
          <Card title="Mockup Column Component"></Card>
          <Card title="Mockup Card Component"></Card>
        </Column>
        <Column title="Done">
          <Card title="Scaffold app via CRA"></Card>
          <Card title="Add chakra-ui"></Card>
        </Column>
        <AddNewItem
          toggleButtonText="+ Add another list"
          toggleButtonProps={{ variant: 'blue' }}
          onAdd={(title) => console.log('create list', title)}
        />
      </AppContainer>
    </ChakraProvider>
  );
}

export default App;
