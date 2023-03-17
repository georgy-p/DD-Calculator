import React from 'react';
import Display from './Display';
import Equal from './Equal';
import Numbers from './Numbers';
import Operators from './Operators';

export const calculatorComponents = {
  'display': () => <Display />,
  'equal': () => <Equal />,
  'numbers': () => <Numbers />,
  'operators': () => <Operators />,
};
