import React, { useState} from 'react';
import { View, Text, Image } from 'react-native';
import logo from '../../assets/images/agroLogo.png';
import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { authService } from "../../services/authService";
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleChangeEmail = (text: string) => setEmail(text);
  const handleChangePassword = (text: string) => setPassword(text);

  const handleSubmit = async (e: React.FormEvent | null) => {
    e?.preventDefault();
    
    if (!email || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    try {
      await authService.login(email, password);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      
      if (error instanceof Error && error.message.includes('invalid email')) {
        setError("Email inválido");
      } else if (error instanceof Error && error.message.includes('invalid password')) {
        setError("Senha incorreta");
      } else if (error instanceof Error && error.message.includes('user does not exist')) {
        setError("Usuário não encontrado");
      } else {
        setError("Erro de autenticação");
      }
    }
  };

  return (
    <View style={styles.container}>
        <Image style={styles.imgLogo} source={logo} />
      <Text style={styles.title}>Login</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>E-mail</Text>
        <View style={styles.inputContainer}>
          <Icon name="person-outline" size={25} style={styles.icon} />
          <Input
            placeholder="Informe seu e-mail"
            value={email}
            onChangeText={handleChangeEmail}
          />
        </View>
      </View>
  
      <View style={styles.formGroup}>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputContainer}>
          <Icon name="lock-closed-outline" size={25} style={styles.icon} />
          <InputPassword
            style={styles.inputField}
            placeholder="Informe sua senha"
            value={password}
            onChangeText={handleChangePassword}
          />
        </View>
      </View>
  
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
  
      <Button
        title="ENTRAR"
        onPress={handleSubmit}
        style={styles.btnLogin}
      />
    </View>
  );
};  
      
export default Login;
      
            
      
      
            
      
            
