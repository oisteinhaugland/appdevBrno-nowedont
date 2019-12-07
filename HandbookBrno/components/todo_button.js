import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {
  // previously imported modules
  Animated, // provides methods for animating components
  Easing // for implementing easing functions
} from "react-native";


class Todo_button extends React.Component {

  constructor(props) {
    super(props);
    this.text= props.text
  }
  
render(){
    return (
            
              <TouchableHighlight
                style={styles.button_style}
                underlayColor="#f39c12"
                onPress={() => {}} 
              >

                    <Text>
                      {this.text}
                    </Text>
                    
                </TouchableHighlight>
          
    )
  }
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
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  button_style_pressed:{
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2,
  },
    elevation: 1,
    shadowOpacity: 0,
    shadowRadius: 0,
  }
  

});

export default Todo_button


