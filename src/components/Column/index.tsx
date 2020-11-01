import React from 'react';

import AddNewItem from '../AddNewItem';

import ColumnContainer from './ColumnContainer';
import ColumnTitle from './ColumnTitle';

interface ColumnProps {
  title: string;
}

const Column = ({ title, children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another item"
        onAdd={(title) => console.log('create list', title)}
      />
    </ColumnContainer>
  );
}

export default Column;