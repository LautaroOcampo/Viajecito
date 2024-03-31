import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {


  const getUberPrices = async (startLat, startLng, endLat, endLng) => {
    try {
      const response = await fetch(`http://localhost:3000/api/uber?start_latitude=${startLat}&start_longitude=${startLng}&end_latitude=${endLat}&end_longitude=${endLng}`);
      const data = await response.json();
      console.log('Precios de Uber:', data.prices);
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  
  // Uso de la función getUberPrices
  getUberPrices(-34.6037, -58.3816, -34.5969, -58.3731);
  

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
