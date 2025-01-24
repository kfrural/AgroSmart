import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Button from '../../components/Button';
import Table from '../../components/Table';
import { useNavigation } from '@react-navigation/native';

const Estoque = () => {
  const navigation = useNavigation();
  const dadosEstoque = [
    { Produto: "Frutas", Quantidade: 500, Unidade: "kg" },
    { Produto: "Legumes", Quantidade: 300, Unidade: "kg" },
    { Produto: "Grãos", Quantidade: 200, Unidade: "kg" },
    { Produto: "Cereais", Quantidade: 400, Unidade: "kg" },
    { Produto: "Óleos", Quantidade: 100, Unidade: "litros" }
  ];

  const handlePress = (routeName) => {
    navigation.navigate(routeName);
  };
  
  return (
    <View>
      <Header />
      <View>
        <Text>Bem-vindo à página inicial!</Text>
        <Button 
          title="Novo" 
          onPress={() => handlePress("CadEstoque")}
          style={{ width: 200 }} 
          textStyle={{ fontSize: 18 }}
        />
        <Button 
          title="Histórico" 
          onPress={() => handlePress("Historico")} 
          style={{ width: 200 }} 
          textStyle={{ fontSize: 18 }}
        />
        <Table data={dadosEstoque} />
      </View>
      <Nav />
    </View>
  );
};

export default Estoque;
