import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  btnsContainer: {
    alignItems: 'center',
    flexDirection: 'row', 
    justifyContent: 'center',
  },
  btnEst1: {
    width: 150, 
    height: 50, 
    marginHorizontal: 8,
    backgroundColor: '#008d5a',
    fontSize: 18
  },
  btnEst2: {
    width: 150, 
    height: 50, 
    marginHorizontal: 8,
    backgroundColor: '#1250b2',
    fontSize: 18
  }
});

export default styles;
