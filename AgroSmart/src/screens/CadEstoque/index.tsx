import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const StockRegistration = () => {
  const [id, setId] = useState('');
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('');

  const handleSubmit = () => {
    console.log('New stock item:', { id, produto, quantidade, unidade });
    navigation.goBack();
  };

   const navigation = useNavigation();
      const handleChange = (text) => {
        console.log('Texto digitado:', text);
      };

  return (
    <View style={styles.container}>
      <Text>Cadastrar Novo Produto</Text>
      <Input 
        placeholder="Produto"
        value=""
        onChangeText={handleChange}
      />
      <Input 
        placeholder="Quantidade"
        value=""
        onChangeText={handleChange}
      />
      <Input 
        placeholder="Unidade"
        value=""
        onChangeText={handleChange}
      />
      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
};

export default StockRegistration;
