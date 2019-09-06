// Component File
import React from 'react';
import PropTypes from 'prop-types';
// Wrap everything so we can set a background color for the entire application
import { View } from 'react-native';

import styles from './styles';

const Container = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

// So we can access this whereever we call it
Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
