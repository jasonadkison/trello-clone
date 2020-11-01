import React, { useState } from 'react';

import useFocus from '../../../hooks/useFocus';

import NewItemFormContainer from './NewItemFormContainer';
import NewItemInput from './NewItemInput';
import NewItemButton from './NewItemButton';

export interface NewItemFormProps {
  onAdd: (title: string) => void;
}

const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [title, setTitle] = useState('');
  const inputRef = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput inputRef={inputRef} value={title} onChange={(e) => setTitle(e.target.value)} />
      <NewItemButton onClick={() => onAdd(title)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;