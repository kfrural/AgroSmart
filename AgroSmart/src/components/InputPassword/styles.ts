import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    //borderWidth: 1,
    borderRadius: 5,
  },
  iconPassword: {
    marginLeft: 10,
    color: '#000', 
  },
});

export default styles;
