import React from 'react';

import CardContainer from './CardContainer';

interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => (
  <CardContainer>
    {title}
  </CardContainer>
);

export default Card;