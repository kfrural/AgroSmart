import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Nav from '../../components/Nav';

const Home = () => {
  return (
    <View>
      <Header />
      <View>
        <Text>Bem-vindo à página inicial!</Text>
      </View>
      <Nav />
    </View>
  );
};

export default Home;
