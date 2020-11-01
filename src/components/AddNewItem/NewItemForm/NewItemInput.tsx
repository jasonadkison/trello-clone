import React from 'react';
import { Input } from '@chakra-ui/core';

interface NewItemInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewItemInput = ({ value, onChange }: NewItemInputProps) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      bg="white"
      color="black"
    />
  );
}

export default NewItemInput;