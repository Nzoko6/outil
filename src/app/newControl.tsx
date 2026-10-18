
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, } from 'react-native';





export default function NouveauControleScreen() {
  const [plaque, setPlaque] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nouveau contrôle</Text>

      <Text style={styles.subtitle}>
        Identifiez le véhicule
      </Text>

      <Text style={styles.label}>
        Plaque d’immatriculation
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex. : 1234 AB 01"
        value={plaque}
        onChangeText={setPlaque}    // permet de faire appel a setPlaque a chaque que la valeur du champs change
        autoCapitalize="characters" // gere le comportement du clavier "characters" privilegie les majuscule
      />

      <Pressable
        style={styles.button}
        onPress={() => {
            if (plaque.trim() === '') { // trim enleve tout les espaces
                alert('Veuillez saisir la plaque du véhicule');
                return;
            }

            router.push({
            pathname: '/infoCars',
            params: { plaque: plaque.trim().toUpperCase() },
            });
            }}
      >
        <Text style={styles.buttonText}>
          Continuer
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F5F7FA',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 32,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    color: '#334155',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1D4ED8',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
