import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const Horizontal_spacer = () => {
 
    return (
        
            <View>
                <Text style={styles.spacer_style}></Text>
            </View>
        
    )
}
const styles = StyleSheet.create({
    spacer_style: {
      height:.6,
      backgroundColor:"rgba(0,0,0,0.5)",      
      marginVertical:10,
      marginHorizontal:10
  }});

export default Horizontal_spacer
