import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Image
          source={require('./assets/icon.png')}
          style={styles.avatar}
        />

        <Text style={styles.name}>
          Tenzin Wangmo
        </Text>

        <Text style={styles.subtitle}>
          BE Information and Technology · CST
        </Text>

        <Text style={styles.bio}>
          I am an IT student learning React Native and mobile application development.
        </Text>

        <View style={styles.likesRow}>
          <Ionicons
            name="heart"
            size={22}
            color="#d64545"
          />

          <Text style={styles.likesText}>
            {likes} likes
          </Text>
        </View>

        {likes >= 10 && (
          <Text style={styles.popularText}>
            You're popular!
          </Text>
        )}

        <View style={styles.buttonRow}>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.pressedButton,
            ]}
            onPress={() => setLikes(likes + 1)}
          >
            <Ionicons
              name="arrow-up"
              size={22}
              color="#ffffff"
            />

            <Text style={styles.buttonLabel}>
              Upvote
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.pressedButton,
            ]}
            onPress={() => setLikes(Math.max(0, likes - 1))}
          >
            <Ionicons
              name="arrow-down"
              size={22}
              color="#ffffff"
            />

            <Text style={styles.buttonLabel}>
              Downvote
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.resetButton,
              pressed && styles.pressedButton,
            ]}
            onPress={() => setLikes(0)}
          >
            <Ionicons
              name="refresh"
              size={22}
              color="#ffffff"
            />

            <Text style={styles.buttonLabel}>
              Reset
            </Text>
          </Pressable>

        </View>

      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 28,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
  },

  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 6,
    textAlign: 'center',
  },

  bio: {
    fontSize: 15,
    color: '#374151',
    textAlign: 'center',
    marginTop: 14,
    lineHeight: 22,
  },

  likesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginTop: 22,
  },

  likesText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },

  popularText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2f6fed',
    marginTop: 10,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 18,
  },

  button: {
    backgroundColor: '#2f6fed',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 82,
  },

  resetButton: {
    backgroundColor: '#555555',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 82,
  },

  pressedButton: {
    opacity: 0.6,
  },

  buttonLabel: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 3,
  },

});