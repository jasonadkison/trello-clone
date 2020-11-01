import { extendTheme } from '@chakra-ui/core';
import type { Styles } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

const components = {
  Button: {
    variants: {
      blue: {
        bg: 'blue.500',
        color: 'whiteAlpha.800',
        _hover: {
          bg: 'blue.200',
          color: 'gray.800'
        }
      }
    }
  }
}

const styles: Styles = {
  global: (props) => ({
    'html, body, #root': {
      height: '100%'
    },
    body: {
      bg: mode('blue.600', 'gray.800')(props),
      color: mode('gray.800', 'whiteAlpha.800')(props)
    }
  })
};

const theme = extendTheme({ components, styles });

export default theme;