import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function AddNoteScreen({ navigation, addNote }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const saveNote = () => {
    if (title.trim() === '' || description.trim() === '') {
      return;
    }

    addNote({
      title: title.trim(),
      description: description.trim(),
    });

    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Create a Note</Text>

        <Text style={styles.subtitle}>
          Add something you want to remember.
        </Text>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.label}>Note Title</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter note title"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Description</Text>

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Write your note here..."
          value={description}
          onChangeText={setDescription}
          multiline
          textAlignVertical="top"
        />

        <TouchableOpacity
          style={styles.saveButton}
          onPress={saveNote}
        >
          <Text style={styles.saveButtonText}>
            Save Note
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  header: {
    padding: 24,
    paddingTop: 30,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    color: '#6B7280',
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 22,
    borderRadius: 20,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    marginTop: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 13,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
  },

  textArea: {
    height: 140,
    paddingTop: 13,
  },

  saveButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 25,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  cancelButton: {
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 8,
  },

  cancelButtonText: {
    color: '#6B7280',
    fontSize: 15,
    fontWeight: '600',
  },
});