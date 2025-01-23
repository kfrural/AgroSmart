import React from 'react';
import { View, StatusBar } from 'react-native';
//import StackNavigator from './src/navigation/StackNavigator';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </View>
  );
};

export default App;
