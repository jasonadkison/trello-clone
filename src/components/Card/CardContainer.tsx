import React from 'react';
import type { ChakraStyleProps } from '@chakra-ui/core';
import { Box, useColorModeValue } from '@chakra-ui/core';

const CardContainer = ({ children, ...props }: React.PropsWithChildren<ChakraStyleProps>) => (
  <Box
    bg={useColorModeValue('gray.100', 'gray.400')}
    cursor="pointer"
    mb="2"
    px="4"
    py="2"
    maxWidth="300px"
    borderRadius="3px"
    boxShadow="md"
    {...props}
  >
    {children}
  </Box>
);

export default CardContainer;