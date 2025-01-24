import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Dashboard from '../../components/Dashboard';
import Nav from '../../components/Nav';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Tela Inicial</Text>
        <Dashboard />
      </View>
      <Nav />
    </View>
  );
};

export default Home;
