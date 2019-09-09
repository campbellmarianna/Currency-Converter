import React from 'react';
import {
  View,
  Text, ImageBackground,
  Image,
} from 'react-native';

import styles from './styles';
// Use paraenthesis to explicit return a component from this
/* Comment for Image Element:
To get the actual image were going to create a prop */
const Logo = () => (
  <View style={styles.container}>
    <ImageBackground resizeMode="contain" style={styles.containerImage} source={require('./images/background.png')}>
      <Image stles={styles.image} source={require('./images/logo.png')} />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;

// function MyComp(props) {
//   return (
//   <View>
//     {props.children}
//   </View>
//   )
// }
//  const t = (props) => <View></View>