/**
 * This will be my static creative application for a wordrobe selector
 * Author: Novia Wu
 * Date: 9/20/2021 
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import ItemCard from './components/ItemCard';

export default function App() {
  return (
    <View style={styles.container}>
      <ItemCard start={10} name="Student"></ItemCard>
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
