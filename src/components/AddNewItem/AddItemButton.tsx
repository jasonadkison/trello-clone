import React from 'react';
import { Button } from '@chakra-ui/core';
import type { ButtonProps } from '@chakra-ui/core';

export interface AddItemButtonProps {
  onClick(): void;
  buttonProps?: ButtonProps;
}

const AddItemButton = (props: React.PropsWithChildren<AddItemButtonProps>) => {
  const { onClick, buttonProps, children } = props;

  return (
    <Button onClick={onClick} variant="ghost" {...buttonProps}>
      {children}
    </Button>
  )
};

export default AddItemButton;