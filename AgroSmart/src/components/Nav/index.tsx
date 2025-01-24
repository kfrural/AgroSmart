import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Nav = () => {
  const navigation = useNavigation();
  const handlePress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem} onPress={() => handlePress("Home")}>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => handlePress("Estoque")}>
        <Text style={styles.navText}>Estoque</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => handlePress("Transacoes")}>
        <Text style={styles.navText}>Transações</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Nav;
