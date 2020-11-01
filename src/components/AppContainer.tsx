import React from 'react';
import type { ChakraStyleProps } from '@chakra-ui/core';
import { Flex } from '@chakra-ui/core';

const AppContainer = ({ children, ...props }: React.PropsWithChildren<ChakraStyleProps>) => (
  <Flex align="flex-start" p="5" w="100%" h="100%" {...props}>
    {children}
  </Flex>
);

export default AppContainer;