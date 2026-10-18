import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONTRÔLE ROUTIER</Text>

      <Text style={styles.subtitle}>
        Bienvenue, Agent
      </Text>

      <Pressable style={styles.button} onPress={() => router.push('/newControl')}>
        <Text style={styles.buttonText}>Nouveau contrôle</Text> 
      </Pressable>

      <Pressable style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Mes contrôles</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F5F7FA',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#172554',
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 32,
    color: '#64748B',
  },

  button: {
    backgroundColor: '#1D4ED8',
    padding: 16,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  secondaryButton: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },

  secondaryButtonText: {
    color: '#1D4ED8',
    fontSize: 16,
    fontWeight: 'bold',
  },
});