// Entry Point
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Options from './screens/Options';

// Build our stylesheet before our application renders
// Set global variables and calc styles
EStyleSheet.build({
  $primaryBlue: '#4F6D7A',

  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434',
});

// Export a function that then returns a component
export default () => <Options />;
