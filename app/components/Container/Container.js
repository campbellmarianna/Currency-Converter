// Component File
import React from 'react';
import PropTypes from 'prop-types';
// Wrap everything so we can set a background color for the entire application
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

// So we can access this whereever we call it
Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
