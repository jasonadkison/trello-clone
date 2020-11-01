import React from 'react';

import ColumnContainer from './ColumnContainer';
import ColumnTitle from './ColumnTitle';

interface ColumnProps {
  title: string;
}

const Column = ({ title, children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
}

export default Column;