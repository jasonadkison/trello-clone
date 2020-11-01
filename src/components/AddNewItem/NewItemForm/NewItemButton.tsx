import React from 'react';
import { Button } from '@chakra-ui/core';

interface NewItemButtonProps {
  onClick: () => void;
}

const NewItemButton = (props: React.PropsWithChildren<NewItemButtonProps>) => {
  const { onClick, children } = props;
  return (
    <Button onClick={onClick} mt="2">{children}</Button>
  );
}

export default NewItemButton;