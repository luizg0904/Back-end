import React, { useState } from 'react';  
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const Cultivo = ({ navigation }) => {
  const [insumo, setInsumo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [dataInicio, setDataInicio] = useState(new Date());
  const [dataFim, setDataFim] = useState(null);
  const [showDataInicio, setShowDataInicio] = useState(false);
  const [showDataFim, setShowDataFim] = useState(false);
  const [cultivos, setCultivos] = useState([]); // Estado para armazenar cultivos salvos

  // Lista de insumos para o seletor
  const insumosList = [
    { label: 'Insumo 1', value: '1' },
    { label: 'Insumo 2', value: '2' },
    { label: 'Insumo 3', value: '3' },
  ];

  // Função para salvar os dados de cultivo
  const salvarCultivo = () => {
    const novoCultivo = {
      id_insumo: insumo,
      id_quantidade: quantidade,
      data_inicio: dataInicio,
      data_fim: dataFim,
    };
    setCultivos([...cultivos, novoCultivo]);  // Adiciona o novo cultivo ao estado
    setInsumo('');  // Limpar campos após salvar
    setQuantidade('');
    setDataInicio(new Date());
    setDataFim(null);
  };

  // Função para formatar a data em português
  const formatDate = (date) => {
    return date ? date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }) : 'Não especificado';
  };

  // Função para excluir cultivo
  const excluirCultivo = (index) => {
    const novosCultivos = [...cultivos];
    novosCultivos.splice(index, 1);  // Remove o cultivo pelo índice
    setCultivos(novosCultivos);  // Atualiza o estado
  };

  // Renderizar cada item de cultivo salvo
  const renderCultivo = ({ item, index }) => (
    <View style={styles.cultivoItem}>
      <Text style={styles.cultivoText}>Insumo: {item.id_insumo}</Text>
      <Text style={styles.cultivoText}>Quantidade: {item.id_quantidade}</Text>
      <Text style={styles.cultivoText}>Data de Início: {formatDate(item.data_inicio)}</Text>
      <Text style={styles.cultivoText}>Data de Fim: {formatDate(item.data_fim)}</Text>
      
      {/* Botão para Excluir Cultivo */}
      <TouchableOpacity onPress={() => excluirCultivo(index)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Excluir Cultivo</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Insumo:</Text>
      {/* Seletor para insumo */}
      <RNPickerSelect
        onValueChange={(value) => setInsumo(value)}
        items={insumosList}
        style={pickerSelectStyles}
        placeholder={{ label: "Selecione o insumo", value: null }}
      />

      <Text style={styles.label}>Quantidade:</Text>
      <TextInput
        style={styles.input}
        value={quantidade}
        onChangeText={setQuantidade}
        placeholder="Digite a quantidade"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Data de Início:</Text>
      <TouchableOpacity onPress={() => setShowDataInicio(true)} style={styles.dateButton}>
        <Text>{dataInicio ? formatDate(dataInicio) : 'Selecionar data'}</Text>
      </TouchableOpacity>
      {showDataInicio && (
        <DateTimePicker
          value={dataInicio}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDataInicio(false);
            setDataInicio(selectedDate || dataInicio);
          }}
        />
      )}

      <Text style={styles.label}>Data de Fim (opcional):</Text>
      <TouchableOpacity onPress={() => setShowDataFim(true)} style={styles.dateButton}>
        <Text>{dataFim ? formatDate(dataFim) : 'Selecionar data'}</Text>
      </TouchableOpacity>
      {showDataFim && (
        <DateTimePicker
          value={dataFim || new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDataFim(false);
            setDataFim(selectedDate || dataFim);
          }}
        />
      )}

      <TouchableOpacity onPress={salvarCultivo} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Salvar Cultivo</Text>
      </TouchableOpacity>

      {/* Seção de Cultivos Salvos */}
      <Text style={styles.sectionTitle}>Cultivos Salvos:</Text>
      <FlatList
        data={cultivos}
        renderItem={renderCultivo}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text style={styles.emptyListText}>Nenhum cultivo salvo.</Text>}
      />
    </View>
  );
};

// Estilos para o seletor
const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 16,
    borderRadius: 5,
  },
  dateButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginBottom: 16,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  cultivoItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  cultivoText: {
    fontSize: 14,
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyListText: {
    fontStyle: 'italic',
    color: '#888',
  },
});

export default Cultivo;
