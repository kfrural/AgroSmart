import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AgroSmart</Text>
    </View>
  );
};

export default Header;
