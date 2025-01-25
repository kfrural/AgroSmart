import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Button from '../../components/Button';
import Table from '../../components/Table';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const HistoricoEstoque = () => {
  const navigation = useNavigation();
  const dadosHistorico = [
    { DataInicial: "2023-01-01", DataFinal: "2023-01-15", Produto: "Frutas", Operacoes: "Entrada" },
    { DataInicial: "2023-02-05", DataFinal: "2023-02-20", Produto: "Legumes", Operacoes: "Saída" },
    { DataInicial: "2023-03-10", DataFinal: "2023-03-25", Produto: "Grãos", Operacoes: "Entrada" },
    { DataInicial: "2023-04-01", DataFinal: "2023-04-30", Produto: "Cereais", Operacoes: "Saída" },
    { DataInicial: "2023-05-15", DataFinal: "2023-06-01", Produto: "Óleos", Operacoes: "Entrada" }
  ];

  // Filter states
  const [dataInicialMin, setDataInicialMin] = React.useState('');
  const [dataInicialMax, setDataInicialMax] = React.useState('');
  const [produtoFilter, setProdutoFilter] = React.useState('');
  const [operacoesFilter, setOperacoesFilter] = React.useState('');

  const handlePress = () => {
    navigation.navigate('CadHistorico');
  };
  
  const filteredData = dadosHistorico.filter(item => {
    if (dataInicialMin && dataInicialMax) {
      const itemDate = new Date(item.DataInicial);
      return itemDate >= new Date(dataInicialMin) && itemDate <= new Date(dataInicialMax);
    }
    return true;
  }).filter(item => 
    produtoFilter ? item.Produto.includes(produtoFilter) : true
  ).filter(item => 
    operacoesFilter ? item.Operacoes === operacoesFilter : true
  );

  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={styles.title}>Histórico de Estoques</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Data Inicial</Text>
          <Input
            placeholder="YYYY-MM-DD"
            placeholderTextColor="#999"
            style={styles.input}
            value={dataInicialMin}
            onChangeText={(text) => setDataInicialMin(text)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Data Final</Text>
          <Input
            placeholder="YYYY-MM-DD"
            placeholderTextColor="#999"
            style={styles.input}
            value={dataInicialMax}
            onChangeText={(text) => setDataInicialMax(text)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Produto</Text>
          <Input
            placeholder="Filtrar por produto"
            placeholderTextColor="#999"
            style={styles.input}
            value={produtoFilter}
            onChangeText={(text) => setProdutoFilter(text)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Operações</Text>
          <Input
            placeholder="Filtrar por operação"
            placeholderTextColor="#999"
            style={styles.input}
            value={operacoesFilter}
            onChangeText={(text) => setOperacoesFilter(text)}
          />
        </View>
      </View>
      <Table data={filteredData} />
      <View style={{ marginTop: 20 }}>
        <Button title="Cadastrar Histórico" onPress={handlePress} style={styles.button} />
      </View>
      <Nav />
    </View>
  );
};

export default HistoricoEstoque;
