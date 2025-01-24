import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Estoque from '../screens/Estoque';
import Transacoes from '../screens/Transacoes';
import CadEstoque from '../screens/CadEstoque';
import Historico from '../screens/Historico';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Estoque" component={Estoque} />
        <Stack.Screen name="Transacoes" component={Transacoes} />
        <Stack.Screen name="CadEstoque" component={CadEstoque} />
        <Stack.Screen name="Historico" component={Historico} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;