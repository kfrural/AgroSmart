import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Nav = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Nav;
