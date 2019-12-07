import React from 'react'
import {Alert,View, Component, Text, StyleSheet, TouchableHighlight} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  // previously imported modules
  Animated, // provides methods for animating components
  Easing // for implementing easing functions
} from "react-native";
import { AsyncStorage } from 'react-native';


import * as todo_list_states from '../data/todo_list_states.json';

class Todo_button extends React.Component {


  _storeData = async (itemName, itemValue) => {
    try {
      await AsyncStorage.setItem(itemName, itemValue);
    } catch (error) {
      // Error saving data
    }
  };

  _retrieveData = async (itemName) => {
    try {
      const value = await AsyncStorage.getItem(itemName);
      if (value !== null) {
        // We have data!!
        return value;
      }
    } catch (error) {
      // Error retrieving data
    }
  };


  componentDidMount(){
      
      //this.setState({
      //  completed : todo_list_states[this.props.identifier]
      //})
      //this._storeData(this.props.identifier, "somevalue");
     // this._retrieveData(this.props.identifier).then(k => {this.setState({completed: k})});
          
  }

  constructor(props){
    super (props)
    this.text = props.text
    this.state = { completed : 'false'}
    this._retrieveData(this.props.identifier).then(k => {
      if(k != "true" && k != "false"){
        this.setState({completed: "false"})
      }
      else this.setState({completed: k})

      }).then(()=>{
      this.completed_text = "Completed "
      this.not_completed_text = "Mark as complete"
      
      if(this.state.completed == 'true'){
        this.SetCompletedStyles();
      } else {
        this.SetNotCompletedStyles();
      }
      this.forceUpdate();
    });

  
  }

  onPress = () => {
    console.log(this.state);
    if(this.state.completed == 'false'){
      
        this.setState({  
          completed: 'true'  
        })
        this._storeData(this.props.identifier, 'true');
        this.SetCompletedStyles();


    }  else {

        this.setState({  
          completed: 'false'  
        })
        this._storeData(this.props.identifier, 'false');
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
      backgroundColor:"#2ecc71",
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