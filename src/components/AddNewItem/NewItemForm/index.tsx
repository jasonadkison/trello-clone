import React, { useState } from 'react';

import NewItemFormContainer from './NewItemFormContainer';
import NewItemInput from './NewItemInput';
import NewItemButton from './NewItemButton';

export interface NewItemFormProps {
  onAdd: (title: string) => void;
}

const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [title, setTitle] = useState('');

  return (
    <NewItemFormContainer>
      <NewItemInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <NewItemButton onClick={() => onAdd(title)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;