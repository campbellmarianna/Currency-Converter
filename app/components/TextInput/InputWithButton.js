import PropTypes from 'prop-types';
import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput,
} from 'react-native';

import styles from './styles';

const InputWithButton = ({ onPress, buttonText, editable=true}) => (
  <View styles={styles.container}>
    <TouchableHighlight styles={styles.buttonContainer} onPress={onPress}>
      <Text styles={styles.buttonText}>{buttonText}</Text>
    </TouchableHighlight>
    <View styles={styles.border} />
    <TextInput styles={styles.input} />
  </View>
);

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButton;
