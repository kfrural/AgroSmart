import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';
import Header from '../../components/Header';
import Nav from '../../components/Nav';

const transactions = [
  {
    status: 'Aceito',
    envio: '13/01/2025',
    origem: 'DCTA - LATICÍNIOS',
    enviadoPor: 'GABRIEL JUNIO DE ARAÚJO CABRAL',
    produto: 'QUEIJO MUSSARELA GRANDE',
    quant: '12,9',
    und: 'KG',
    destino: 'REFEITÓRIO',
    conferidoPor: 'Refeitório'
  }
];

const Transaction = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [origin, setOrigin] = useState('');
  const [product, setProduct] = useState('');
  const [status, setStatus] = useState('');
  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };

  const handleConfirmStartDate = (date) => {
    setStartDate(date);
    hideStartDatePicker();
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

  const handleConfirmEndDate = (date) => {
    setEndDate(date);
    hideEndDatePicker();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Transações entre setores</Text>
        <View style={styles.filterRow}>
          <Text style={styles.label}>Início:</Text>
          <TouchableOpacity onPress={showStartDatePicker} style={styles.datePicker}>
            <Text>{startDate.toDateString()}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isStartDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmStartDate}
            onCancel={hideStartDatePicker}
          />
        </View>
        <View style={styles.filterRow}>
          <Text style={styles.label}>Final:</Text>
          <TouchableOpacity onPress={showEndDatePicker} style={styles.datePicker}>
            <Text>{endDate.toDateString()}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isEndDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmEndDate}
            onCancel={hideEndDatePicker}
          />
        </View>
        <View style={styles.filterRow}>
          <Text style={styles.label}>Origem:</Text>
          <Picker
            selectedValue={origin}
            onValueChange={(itemValue) => setOrigin(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Todos..." value="" />
            <Picker.Item label="DCTA - LATICÍNIOS" value="DCTA - LATICÍNIOS" />
            {/* Adicione mais opções conforme necessário */}
          </Picker>
        </View>
        <View style={styles.filterRow}>
          <Text style={styles.label}>Produto:</Text>
          <Picker
            selectedValue={product}
            onValueChange={(itemValue) => setProduct(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Todos..." value="" />
            <Picker.Item label="QUEIJO MUSSARELA GRANDE" value="QUEIJO MUSSARELA GRANDE" />
            <Picker.Item label="DOCE DE LEITE DE CABRA - PCT" value="DOCE DE LEITE DE CABRA - PCT" />
            {/* Adicione mais opções conforme necessário */}
          </Picker>
        </View>
        <View style={styles.filterRow}>
          <Text style={styles.label}>Status:</Text>
          <Picker
            selectedValue={status}
            onValueChange={(itemValue) => setStatus(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Todos..." value="" />
            <Picker.Item label="Aceito" value="Aceito" />
            {/* Adicione mais opções conforme necessário */}
          </Picker>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.buttonText}>Filtrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.allButton}>
            <Text style={styles.buttonText}>Tudo</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {transactions.map((transaction, index) => (
          <View style={styles.transaction} key={index}>
            <Text style={styles.label}>Status:</Text>
            <Text style={styles.value}>{transaction.status}</Text>
            <Text style={styles.label}>Envio:</Text>
            <Text style={styles.value}>{transaction.envio}</Text>
            <Text style={styles.label}>Origem:</Text>
            <Text style={styles.value}>{transaction.origem}</Text>
            <Text style={styles.label}>Enviado Por:</Text>
            <Text style={styles.value}>{transaction.enviadoPor}</Text>
            <Text style={styles.label}>Produto:</Text>
            <Text style={styles.value}>{transaction.produto}</Text>
            <Text style={styles.label}>Quant:</Text>
            <Text style={styles.value}>{transaction.quant}</Text>
            <Text style={styles.label}>Und:</Text>
            <Text style={styles.value}>{transaction.und}</Text>
            <Text style={styles.label}>Destino:</Text>
            <Text style={styles.value}>{transaction.destino}</Text>
            <Text style={styles.label}>Conferido Por:</Text>
            <Text style={styles.value}>{transaction.conferidoPor}</Text>
          </View>
        ))}
      </ScrollView>
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    width: 80,
    fontWeight: 'bold',
  },
  datePicker: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  picker: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  filterButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  allButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  note: {
    marginTop: 10,
    fontSize: 12,
    color: 'grey',
  },
  scrollView: {
    padding: 10,
  },
});

export default Transaction;