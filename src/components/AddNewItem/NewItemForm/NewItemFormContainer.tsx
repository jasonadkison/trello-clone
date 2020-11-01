import React from 'react';
import type { ChakraStyleProps } from '@chakra-ui/core';
import { Flex } from '@chakra-ui/core';

const NewItemFormContainer = ({ children, ...props }: React.PropsWithChildren<ChakraStyleProps>) => (
  <Flex
    direction="column"
    align="flex-start"
    width="100%"
    maxWidth="300px"
    {...props}
  >
    {children}
  </Flex>
);

export default NewItemFormContainer;