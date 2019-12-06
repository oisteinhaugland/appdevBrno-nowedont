import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const Todo_button = ({text,color}) => {
 
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
      padding:20,
      margin:0,
      borderRadius:2,
      backgroundColor:"#f39c12"     
  }});

export default Todo_button


