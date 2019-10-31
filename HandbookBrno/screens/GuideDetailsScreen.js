import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

const GuideDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Guide Details</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });
export default GuideDetailsScreen