
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function VehicleInfoScreen() {
  const { plaque } = useLocalSearchParams(); // cette fonction affiche le valeur que push transmet (voir newControl)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informations du véhicule</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Plaque d’immatriculation</Text>
        <Text style={styles.value}> {plaque} </Text>

        <Text style={styles.label}>Marque</Text>
        <Text style={styles.value}>Toyota</Text>

        <Text style={styles.label}>Modèle</Text>
        <Text style={styles.value}>Corolla</Text>

        <Text style={styles.label}>Propriétaire</Text>
        <Text style={styles.value}>Jean Dupont</Text>

        <Text style={styles.label}>Statut des documents</Text>
        <Text style={styles.status}>À vérifier</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F5F7FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  label: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 16,
    marginBottom: 4,
  },
  value: {
    fontSize: 17,
    fontWeight: '600',
    color: '#172554',
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B45309',
  },
});
