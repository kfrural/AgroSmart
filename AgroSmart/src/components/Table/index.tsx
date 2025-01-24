import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface DataItem {
  id: number;
  name: string;
  age: number;
  city: string;
}

interface Props {
  data: DataItem[];
}

const Table = ({ data }: Props) => {
  const [sortColumn, setSortColumn] = useState<keyof DataItem>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const sortedData = useMemo(() => {
    if (!data || !sortColumn) return data;
    
    const sorted = [...data].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (a[sortColumn] > b[sortColumn]) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
    
    return sorted;
  }, [data, sortColumn, sortDirection]);

  const handleSort = (column: keyof DataItem) => {
    if (column === sortColumn) {
      setSortDirection(prevDir => prevDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {Object.keys(data[0]).map((key) => (
          <TouchableOpacity 
            key={key} 
            style={styles.headerCell}
            onPress={() => handleSort(key as keyof DataItem)}
          >
            <Text style={styles.headerText}>{key}</Text>
            {sortColumn === key && (
              <Text style={[styles.sortArrow, sortDirection === 'asc' ? styles.ascending : styles.descending]}>
                ▲
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
      
      {sortedData.map((item) => (
        <View style={styles.row} key={`${item.id}`}>
          {Object.values(item).map((value, index) => (
            <Text key={`${index}-${item.id}`} style={styles.cell}>{value}</Text>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Table;
