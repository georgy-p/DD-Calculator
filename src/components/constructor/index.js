import React from 'react';
import CDisplay from './CDisplay';
import CEqual from './CEqual';
import CNumbers from './CNumbers';
import COperators from './COperators';

export const constructorComponents = {
  display: () => <CDisplay />,
  equal: () => <CEqual />,
  numbers: () => <CNumbers />,
  operators: () => <COperators />,
};
