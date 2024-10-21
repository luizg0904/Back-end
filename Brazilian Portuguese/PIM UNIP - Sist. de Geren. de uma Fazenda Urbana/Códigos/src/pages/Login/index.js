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
      {/* Título da página de Login */}
      <Text style={styles.logo}>BLUEFARM</Text>
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
    padding: 20,
    backgroundColor: '#E6F2FF',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Login;
