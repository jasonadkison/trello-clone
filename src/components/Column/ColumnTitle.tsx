import React from 'react';
import type { ChakraStyleProps } from '@chakra-ui/core';
import { Box } from '@chakra-ui/core';

const ColumnTitle = ({ children, ...props }: React.PropsWithChildren<ChakraStyleProps>) => (
  <Box
    pt="2"
    px="4"
    pb="3"
    fontWeight="bold"
    {...props}
  >
    {children}
  </Box>
);

export default ColumnTitle;