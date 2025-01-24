import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const Input = ({ placeholder, value, onChangeText }) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={inputValue}
        onChangeText={(text) => {
          setInputValue(text);
          onChangeText(text);
        }}
      />
    </View>
  );
};
export default Input;
