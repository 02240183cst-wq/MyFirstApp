import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

export default function HomeScreen({
  navigation,
  notes,
  deleteNote,
}) {
  const handleDelete = (id) => {
    Alert.alert(
      'Delete Note',
      'Are you sure you want to delete this note?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => deleteNote(id),
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>
            Welcome back 👋
          </Text>

          <Text style={styles.heading}>
            My First App
          </Text>
        </View>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.welcomeCard}>
        <Text style={styles.cardTitle}>
          Welcome to your app!
        </Text>

        <Text style={styles.cardText}>
          Create and manage your personal notes
          using this simple React Native application.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.buttonText}>
            View Profile →
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddNote')}
      >
        <Text style={styles.addButtonText}>
          ＋ Create a Note
        </Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>
        My Notes
      </Text>

      {notes.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyIcon}>📝</Text>

          <Text style={styles.emptyTitle}>
            No notes yet
          </Text>

          <Text style={styles.emptyText}>
            Create your first note using the button above.
          </Text>
        </View>
      ) : (
        notes.map((item) => (
          <View
            key={item.id}
            style={styles.noteCard}
          >
            <View style={styles.noteIconContainer}>
              <Text style={styles.noteIcon}>📝</Text>
            </View>

            <View style={styles.noteContent}>
              <Text style={styles.noteTitle}>
                {item.title}
              </Text>

              <Text style={styles.noteDescription}>
                {item.description}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={styles.deleteText}>🗑️</Text>
            </TouchableOpacity>
          </View>
        ))
      )}

      <Text style={styles.sectionTitle}>
        Quick Features
      </Text>

      <View style={styles.featureRow}>
        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>📝</Text>
          <Text style={styles.featureTitle}>Notes</Text>
          <Text style={styles.featureText}>
            Create your own notes
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>⚡</Text>
          <Text style={styles.featureTitle}>Fast</Text>
          <Text style={styles.featureText}>
            Simple and responsive
          </Text>
        </View>
      </View>

      <View style={styles.featureRow}>
        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>🎨</Text>
          <Text style={styles.featureTitle}>Design</Text>
          <Text style={styles.featureText}>
            Clean modern interface
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>🚀</Text>
          <Text style={styles.featureTitle}>Learn</Text>
          <Text style={styles.featureText}>
            Practice React Native
          </Text>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: 25,
  },

  greeting: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 5,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
  },

  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E8EDFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileIcon: {
    fontSize: 23,
  },

  welcomeCard: {
    marginHorizontal: 20,
    padding: 24,
    borderRadius: 20,
    backgroundColor: '#4F46E5',
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },

  cardText: {
    fontSize: 15,
    lineHeight: 23,
    color: '#E0E7FF',
    marginBottom: 20,
  },

  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
  },

  buttonText: {
    color: '#4F46E5',
    fontSize: 15,
    fontWeight: 'bold',
  },

  addButton: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#111827',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#111827',
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 15,
  },

  emptyCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 30,
    borderRadius: 18,
    alignItems: 'center',
  },

  emptyIcon: {
    fontSize: 40,
    marginBottom: 10,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 6,
  },

  emptyText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },

  noteCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    borderRadius: 18,
  },

  noteIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  noteIcon: {
    fontSize: 24,
  },

  noteContent: {
    flex: 1,
  },

  noteTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 5,
  },

  noteDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#6B7280',
  },

  deleteButton: {
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteText: {
    fontSize: 18,
  },

  featureRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 15,
    gap: 15,
  },

  featureCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 18,
  },

  featureIcon: {
    fontSize: 28,
    marginBottom: 12,
  },

  featureTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 5,
  },

  featureText: {
    fontSize: 13,
    color: '#6B7280',
  },
});