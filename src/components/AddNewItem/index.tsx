import React, { useState } from 'react';
import type { ButtonProps } from '@chakra-ui/core';

import AddItemButton from './AddItemButton';
import NewItemForm from './NewItemForm';

interface AddNewItemProps {
  onAdd(title: string): void;
  toggleButtonText: string;
  toggleButtonProps?: ButtonProps;
}

const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, toggleButtonProps } = props;

  if (!showForm) {
    return (
      <AddItemButton onClick={() => setShowForm(true)} buttonProps={toggleButtonProps}>
        {toggleButtonText}
      </AddItemButton>
    );
  }

  return (
    <NewItemForm
      onAdd={(title) => { onAdd(title); setShowForm(false); } } 
    />
  );
};

export default AddNewItem;