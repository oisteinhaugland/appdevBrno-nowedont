import React from 'react'
import {Alert,View, Component, Text, StyleSheet, TouchableHighlight} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  // previously imported modules
  Animated, // provides methods for animating components
  Easing // for implementing easing functions
} from "react-native";

import * as todo_list_states from '../data/todo_list_states.json';

class Todo_button extends React.Component {

  componentDidMount(){
    console.log(todo_list_states[this.props.identifier]);  
      this.setState({
        completed : todo_list_states[this.props.identifier]
      })
          
  }

  constructor(props){
    super (props)
    this.text = props.text
    this.state = { completed: todo_list_states[this.props.identifier] }
    this.completed_text = "Completed "
    this.not_completed_text = "Mark as complete"
    
    if(this.state.completed == true){
      this.SetCompletedStyles();
    } else {
      this.SetNotCompletedStyles();
    }
  }

  onPress = () => {

    if(this.state.completed == false){
      
        this.setState({  
          completed: true  
        })
        this.SetcompletedStyles();
    }  else {

        this.setState({  
          completed: false  
        })
        this.SetNotCompletedStyles();  
          
    }
    

  }


  SetNotCompletedStyles = () => {
    this.style = styles.button_style;
    this.text = this.not_completed_text
    this.underlayColor = "#f39c12"
  }

  SetCompletedStyles = () => {
    this.style = styles.button_style_pressed;
    this.text = 
    <Text>
      {this.completed_text}
      <Ionicons name="md-checkmark"/>
    </Text>
    this.underlayColor = "green"
  }
  
render(){
    return (
              <TouchableHighlight
                style={this.style}
                underlayColor={this.underlayColor}
                onPress={this.onPress} 
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
    
    margin:0,
      paddingHorizontal:8,
      paddingVertical:12,
      alignItems: 'center',
      justifyContent: 'center',
      justifyContent:"center",
      alignSelf:'center',
      borderRadius:2,
      backgroundColor:"green",
      flex:3,
      shadowColor: "#000",
      shadowOffset: {
	    width: 0,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
    elevation: 5,

  }
  
});

export default Todo_button




/*
Alert.alert(
  'Alert',
  'This action will mark this activity as not complete',
  [
  
    {text: 'Ok', onPress:() => {
      console.log('Ok Pressed')
    }},
  ],
  {cancelable: false},
)

*/