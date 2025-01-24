import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      marginTop: 20
    },
    headerRow: {
      flexDirection: 'row',
      backgroundColor: '#e0e0e0',
    },
    headerCell: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
    },
    headerText: {
      fontWeight: 'bold',
    },
    sortArrow: {
      marginLeft: 5,
      fontSize: 12,
    },
    ascending: {
      color: '#000',
    },
    descending: {
      color: '#000',
    },
    row: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    cell: {
      flex: 1,
      textAlign: 'center',
    },
  });

  export default styles;