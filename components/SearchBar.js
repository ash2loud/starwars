import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [submittedQuery, setSubmittedQuery] = useState('');
  const spinValue = useRef(new Animated.Value(0)).current;

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  function animateSpin(onDone) {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(onDone);
  }

  function handleSubmit() {
    if (query.trim() !== '') {
      setSubmittedQuery(query);
      setModalVisible(true);
      animateSpin();
    }
  }

  function handleClose() {
    animateSpin(() => setModalVisible(false));
  }

  const repeatedText = Array.from({ length: 20 }, (_, i) => (
    <Text key={i} style={styles.modalQuery}>
      {submittedQuery}
    </Text>
  ));

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
        animationType="none"
        onRequestClose={handleClose}
      >
        <View style={styles.overlay}>
          <Animated.View
            style={[styles.modal, { transform: [{ rotate: spin }] }]}
          >
            <Text style={styles.modalTitle}>You searched for:</Text>
            <ScrollView
              style={styles.scrollArea}
              showsVerticalScrollIndicator={true}
            >
              {repeatedText}
            </ScrollView>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </Animated.View>
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
    padding: 24,
    width: '75%',
    maxHeight: '70%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFE81F',
  },
  modalTitle: {
    color: '#888',
    fontSize: 14,
    marginBottom: 10,
  },
  scrollArea: {
    width: '100%',
    marginBottom: 20,
  },
  modalQuery: {
    color: '#FFE81F',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 4,
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