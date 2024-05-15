import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  

  return(
    <View style={styles.container}>
      <Text>Hello Poulina! </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  }
});

