import React, { RefObject } from 'react';
import { Input } from '@chakra-ui/core';

interface NewItemInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
}

const NewItemInput = ({ value, onChange, inputRef }: NewItemInputProps) => {
  return (
    <Input
      ref={inputRef}
      value={value}
      onChange={onChange}
      bg="white"
      color="black"
    />
  );
}

export default NewItemInput;