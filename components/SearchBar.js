import React, { useState } from 'react';
import {
  View,
  TextInput,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [submittedQuery, setSubmittedQuery] = useState('');

  function handleSubmit() {
    if (query.trim() !== '') {
      setSubmittedQuery(query);
      setModalVisible(true);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSubmit}
        returnKeyType="search"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>You searched for:</Text>
            <Text style={styles.modalQuery}>{submittedQuery}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#0d0d1a',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#FFE81F',
    marginRight: 8,
  },
  button: {
    backgroundColor: '#FFE81F',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#1a1a2e',
    borderRadius: 12,
    padding: 28,
    width: '75%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFE81F',
  },
  modalTitle: {
    color: '#888',
    fontSize: 14,
    marginBottom: 8,
  },
  modalQuery: {
    color: '#FFE81F',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#FFE81F',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  closeText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
