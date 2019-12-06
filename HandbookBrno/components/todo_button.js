import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const Todo_button = ({text}) => {
 
    return (
            
              <TouchableHighlight onPress={() =>{}} style={styles.button_style}>
                  
                    <Text>
                      {text}
                    </Text>
                    
                </TouchableHighlight>
          
    )
}


/*
const mark_as_complete = () {

} 

*/

const styles = StyleSheet.create({
    button_style: {
      margin:0,
      paddingHorizontal:8,
      paddingVertical:12,
      alignItems: 'center',
      justifyContent: 'center',
      justifyContent:"center",
      alignSelf:'center',
      borderRadius:2,
      backgroundColor:"#f39c12",
      flex:3,
      shadowColor: "#000",
      shadowOffset: {
	  width: 0,
	  height: 2,
},
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
  }});

export default Todo_button


