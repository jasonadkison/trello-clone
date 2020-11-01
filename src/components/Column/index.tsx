import React from 'react';

import { useAppState } from '../../contexts/AppStateContext';
import AddNewItem from '../AddNewItem';
import Card from '../Card';

import ColumnContainer from './ColumnContainer';
import ColumnTitle from './ColumnTitle';

interface ColumnProps {
  title: string;
  index: number;
}

const Column = ({ title, index }: ColumnProps) => {
  const { state: { lists } } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {lists[index].tasks.map((task) => (
        <Card key={task.id} title={task.title}></Card>
      ))}
      <AddNewItem
        toggleButtonText="+ Add another item"
        onAdd={(title) => console.log('create list', title)}
      />
    </ColumnContainer>
  );
}

export default Column;