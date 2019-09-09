// container
// gear for settings, make it a touchable Icon
import PropTypes from 'prop-types';
import React from 'react';
import {
  View, Image, TouchableOpacity,
} from 'react-native';

import styles from './styles';

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image resizeMode="contain" style={styles.icon} source={require('./images/gear.png')} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func,
};

export default Header;