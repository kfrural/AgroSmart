import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Button from '../../components/Button';
import Table from '../../components/Table';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Estoque = () => {
  const navigation = useNavigation();
  const dadosEstoque = [
    { Produto: "Frutas", Quantidade: 500, Unidade: "kg" },
    { Produto: "Legumes", Quantidade: 300, Unidade: "kg" },
    { Produto: "Grãos", Quantidade: 200, Unidade: "kg" },
    { Produto: "Cereais", Quantidade: 400, Unidade: "kg" },
    { Produto: "Óleos", Quantidade: 100, Unidade: "litros" },
    { Produto: "Óleos", Quantidade: 100, Unidade: "litros" },
    { Produto: "Óleos", Quantidade: 100, Unidade: "litros" },
    { Produto: "Óleos", Quantidade: 100, Unidade: "litros" },
    { Produto: "Óleos", Quantidade: 100, Unidade: "litros" },
    { Produto: "Óleos", Quantidade: 100, Unidade: "litros" },
    { Produto: "Óleos", Quantidade: 100, Unidade: "litros" }
  ];

  const handlePress = (routeName) => {
    navigation.navigate(routeName);
  };
  
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Tela de Estoque</Text>
        <View style={styles.btnsContainer}>
          <Button 
            title="Novo" 
            onPress={() => handlePress("CadEstoque")}
            style={styles.btnEst1} 
          />
          <Button 
            title="Histórico" 
            onPress={() => handlePress("Historico")} 
            style={styles.btnEst2} 
          />
        </View>
        <Table data={dadosEstoque} />
      </View>
      <Nav />
    </View>
  );
};

export default Estoque;
