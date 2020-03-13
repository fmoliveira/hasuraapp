import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hasura App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
