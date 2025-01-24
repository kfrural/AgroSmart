import React from 'react';
import { View, Text, Image } from 'react-native';
import logo from '../../assets/images/AgrosmartLogoTransp.png';
import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';
import Button from '../../components/Button';

const Login = () => {

    const handleChange = (text) => {
      console.log('Texto digitado:', text);
    };

    const handleChangePassword = (text) => {
      console.log('Texto digitado:', text);
    };

    const handlePress = () => {
      console.log('Botão pressionado!');
    };

  return (
    <View>
      <View>
      <Image source={logo} />
        <Text>Usuário</Text>
        <Input 
        placeholder=""
        value=""
        onChangeText={handleChange}
      />
        <Text>Senha</Text>
        <InputPassword 
        placeholder="Digite sua senha"
        value=""
        onChangeText={handleChangePassword}
      />
      <Button 
        title="Clique aqui" 
        onPress={handlePress} 
        style={{ width: 200 }} 
        textStyle={{ fontSize: 18 }}
      />
      </View>
    </View>
  );
};

export default Login;
