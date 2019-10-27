import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import MainNavCard from './components/MainNavCard';
import OtherCategories from './components/OtherCategories';

export default function App() {
  return (
    <View>
      <Header/>
      <MainNavCard Title="Survival Guide" Description="Something, Something, Something, Something,..."/>
      <OtherCategories/>
      <MainNavCard Title="Another Guide" Description="Something, Something, Something, Something,..." Color="#87CEFA"/>
      <MainNavCard Title="Another Guide" Description="Something, Something, Something, Something,..." Color="#81D2C7"/>
      <MainNavCard Title="Another Guide" Description="Something, Something, Something, Something,..." Color="#E0E0E2"/>    
      <MainNavCard Title="Another Guide" Description="Something, Something, Something, Something,..." Color="#416788"/>    
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

});
