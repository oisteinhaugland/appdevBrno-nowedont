import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View></View>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleStyle: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    padding:10,
    paddingTop:40,
  },
});
