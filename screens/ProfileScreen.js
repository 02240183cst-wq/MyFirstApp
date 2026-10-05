import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>

        <Text style={styles.name}>My Profile</Text>

        <Text style={styles.email}>Welcome to my profile</Text>
      </View>

      {/* Information Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>About Me</Text>

        <View style={styles.infoRow}>
          <Text style={styles.icon}>👤</Text>

          <View>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>React Native Student</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.icon}>📱</Text>

          <View>
            <Text style={styles.label}>Application</Text>
            <Text style={styles.value}>My First React Native App</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.icon}>🎓</Text>

          <View>
            <Text style={styles.label}>Learning</Text>
            <Text style={styles.value}>React Native Development</Text>
          </View>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  header: {
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E8EDFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  avatarText: {
    fontSize: 40,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 5,
  },

  email: {
    fontSize: 15,
    color: '#6B7280',
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 22,
    borderRadius: 20,
  },

  cardTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  icon: {
    fontSize: 24,
    width: 45,
  },

  label: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 3,
  },

  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },

  backButton: {
    margin: 20,
    backgroundColor: '#4F46E5',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
  },

  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});