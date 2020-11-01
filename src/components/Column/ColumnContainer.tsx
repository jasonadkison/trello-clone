import React from 'react';
import type { ChakraStyleProps } from '@chakra-ui/core';
import { Box, useColorModeValue } from '@chakra-ui/core';

const ColumnContainer = ({ children, ...props }: React.PropsWithChildren<ChakraStyleProps>) => (
  <Box
    bg={useColorModeValue('gray.300', 'gray.600')}
    w="18.75rem"
    minHeight="2.5rem"
    mr="5"
    p="2"
    borderRadius="3px"
    flexGrow={0}
    {...props}
  >
    {children}
  </Box>
);

export default ColumnContainer;