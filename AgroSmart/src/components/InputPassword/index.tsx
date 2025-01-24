import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Input from '../Input';
import styles from './styles';

interface InputPasswordProps {
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
}

const InputPassword = ({ placeholder, value, onChangeText }: InputPasswordProps) => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  function handleOnPress() {
    setVisible(!visible);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, visible && styles.visible]}
        placeholder={placeholder}
        value={inputValue}
        onChangeText={(text) => {
          setInputValue(text);
          onChangeText(text);
        }}
        secureTextEntry={!visible}
      />
      <Ionicons
        onPress={handleOnPress}
        size={25}
        style={styles.iconPassword}
        name={visible ? 'eye-outline' : 'eye-off-outline'}
      />
    </View>
  );
};

export default InputPassword;
