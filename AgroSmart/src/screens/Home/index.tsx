import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Dashboard from '../../components/Dashboard';
import Nav from '../../components/Nav';
import styles from '../../components/Header/styles';

const Home = () => {
  return (
    <View>
      <Header />
      <View>
        <Text style={styles.text}>Bem-vindo à página inicial!</Text>
        <Dashboard />
      </View>
      <Nav />
    </View>
  );
};

export default Home;
