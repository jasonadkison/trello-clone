import { extendTheme } from '@chakra-ui/core';
import type { Styles } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

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

const theme = extendTheme({ styles });

export default theme;