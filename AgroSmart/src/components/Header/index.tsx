import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App</Text>
    </View>
  );
};

export default Header;
