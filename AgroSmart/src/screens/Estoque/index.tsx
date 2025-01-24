import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Table from '../../components/Table'

const Estoque = () => {

  const dadosEstoque = [
    { id: 1, Produto: "Frutas", Quantidade: 500, Unidade: "kg" },
    { id: 2, Produto: "Legumes", Quantidade: 300, Unidade: "kg" },
    { id: 3, ProdUto: "Grãos", Quantidade: 200, Unidade: "kg" },
    { id: 4, Produto: "Cereais", Quantidade: 400, Unidade: "kg" },
    { id: 5, Produto: "Óleos", Quantidade: 100, Unidade: "litros" }
  ];
  
  return (
    <View>
      <Header />
      <View>
        <Text>Bem-vindo à página inicial!</Text>
        <Table data={dadosEstoque} />
      </View>
      <Nav />
    </View>
  );
};

export default Estoque;
