import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
