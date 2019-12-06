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
      backgroundColor:"rgba(0,0,0,0.3)",      
      marginVertical:15,
      marginHorizontal:15,



      shadowColor: "#000",
      shadowOffset: {
	  width: 0,
	  height: 2,
},
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,



      
  }});

export default Horizontal_spacer
