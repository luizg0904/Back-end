import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import Dashboard from './src/pages/Dashboard';
import ControleDeProducao from './src/pages/ControleDeProducao';
import GestaoDeEstoque from './src/pages/GestaoDeEstoque';
import GestaoDeVendas from './src/pages/GestaoDeVendas';
import Cultivo from './src/pages/Dashboard/pages/Cultivo';  
import EstoqueDeProdutos from './src/pages/Dashboard/pages/EstoqueProdutos'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ControleDeProducao" component={ControleDeProducao} />
        <Stack.Screen name="GestaoDeEstoque" component={GestaoDeEstoque} />
        <Stack.Screen name="GestaoDeVendas" component={GestaoDeVendas} />
        <Stack.Screen name="Cultivo" component={Cultivo} />  
        <Stack.Screen name="EstoqueDeProdutos" component={EstoqueDeProdutos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
