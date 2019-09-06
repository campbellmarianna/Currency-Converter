// Entry Point
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

// Build our stylesheet before our application renders
EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
});

// Export a function that then returns a component
export default () => <Home />;
