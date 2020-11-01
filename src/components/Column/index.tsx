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
  const { state: { lists }, dispatch } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {lists[index].tasks.map((task) => (
        <Card key={task.id} title={task.title}></Card>
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(title) => {
          dispatch({ type: 'CREATE_TASK', payload: { title, listId: lists[index].id } });
        }}
      />
    </ColumnContainer>
  );
}

export default Column;