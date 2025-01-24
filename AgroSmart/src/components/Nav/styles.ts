import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    bottom: 0, 
    left: 0,
    right: 0,
    height: 60, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    backgroundColor: '#008d5a',
    paddingVertical: 10,
    paddingHorizontal: 20, 
  },
  navItem: {
    alignItems: 'center',
    flexDirection: 'column', 
    justifyContent: 'center',
  },
  navText: {
    fontSize: 14,
    color: '#fff', 
    fontWeight: 'bold',
    marginTop: 5,
  },
  icon: {
    color: '#fff',
  }
});

export default styles;
