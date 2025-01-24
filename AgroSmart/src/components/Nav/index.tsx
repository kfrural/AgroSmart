import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Nav = () => {
  const navigation = useNavigation();
  const handlePress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <>
      <View style={{ flex: 1 }}>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.navItem} onPress={() => handlePress("Estoque")}>
          <Icon name="bar-chart-outline" size={28} style={styles.icon} />
          <Text style={styles.navText}>Estoque</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => handlePress("Home")}>
          <Icon name="home-outline" size={28} style={styles.icon} />
          <Text style={styles.navText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => handlePress("Transacoes")}>
          <Icon name="swap-horizontal-outline" size={28} style={styles.icon} />
          <Text style={styles.navText}>Transações</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Nav;
