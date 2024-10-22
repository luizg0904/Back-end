import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

// Componente de Login
const Login = ({ navigation }) => {
  // Estados para guardar usuário e senha
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  // Função para lidar com o processo de login
  const handleLogin = () => {
    const username = usuario.trim();
    const password = senha.trim();

    // Verifica se os campos não estão vazios
    if (!username || !password) {
      Alert.alert("Erro", "Por favor, preencha ambos os campos!");
      return;
    }

    // Exemplo de verificação simples de login
    if (username === 'alemao@op' && password === '12345678') {
      navigation.navigate('Dashboard');  // Navega para a tela Dashboard após login bem-sucedido
    } else {
      Alert.alert("Erro", "Credenciais inválidas");
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo da aplicação */}
      <Image 
        source={require('./icons/bluefarm.png')} // Altere o caminho para onde sua imagem está localizada
        style={styles.logo}
        resizeMode="contain" // Ajusta o modo de exibição da imagem
      />
      {/* Campo de entrada para o usuário */}
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />
      {/* Campo de entrada para a senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      {/* Botão para submeter o login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#E6F2FF',
  },
  logo: {
    width: 300, 
    height: 300, 
    marginBottom: 30,
    alignSelf: 'center', 
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    width: '100%', 
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Login;
