import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import styles from './styles';

const StockRegistration = () => {
  const [id, setId] = useState('');
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('New stock item:', { id, produto, quantidade, unidade });
    navigation.goBack();
  };

  const handleChange = (text) => {
    console.log('Texto digitado:', text);
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Cadastrar Novo Produto</Text>
        <View style={styles.containerInput}>
          <Input
            placeholder="Produto"
            placeholderTextColor="#999"
            value={produto}
            onChangeText={setProduto}
            style={styles.input}
          />
          <Input
            placeholder="Quantidade"
            placeholderTextColor="#999"
            value={quantidade}
            onChangeText={setQuantidade}
            style={styles.input}
          />
          <Input
            placeholder="Unidade"
            placeholderTextColor="#999"
            value={unidade}
            onChangeText={setUnidade}
            style={styles.input}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleSubmit}>
            <Ionicons name="checkmark-circle-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => navigation.goBack()}>
            <Ionicons name="close-circle-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Nav />
    </>
  );
};

export default StockRegistration;
