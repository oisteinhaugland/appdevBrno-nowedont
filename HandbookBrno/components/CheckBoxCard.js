import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight, CheckBox, Button} from 'react-native';
import CustomText from '../components/CustomText';
import Todo_Button from '../components/todo_button';
import {font_styles,color_scheme} from '../assets/general_styles/general_style.js';

const CheckBoxCard = ({Title, Color, Navigate, GuideID, Description,identifier}) => {
    /*Just return the style for the NavCard with a specified Color in props
    no need to get into this, just know that its used to style the cards color */
    const NavColor = (color) => {
        if (color == null) {
            return styles.NavCardStyle
        }
        else {
            return {
                ...styles.NavCardStyle, backgroundColor: color,
            };
        }
    }
    /*Checkbox needs to store its value in the state of this component, and load the state from a data source(prob a json file)
    Also the Text arrow should probably be replaced with an icon but i didnt have time for that*/
    return (
        /**/ 
            
              <View style={NavColor(Color)}>
                  
                  <View style={styles.Description}>
                    <TouchableHighlight underlayColor="white" activeOpacity={0.5} onPress={()=>{Navigate(GuideID)}}>
                      <View>
                        <Text style={styles.Title}>{Title}</Text>
                        <Text style={styles.Text}>
                          {Description}
                        </Text>
                      </View>
                    </TouchableHighlight>
                  </View>

                  
                
                  <Todo_Button 
                  identifier={identifier}></Todo_Button>
                  
              </View>
            
       
    )
}

const styles = StyleSheet.create({
    NavCardStyle: {
      borderRadius: 0,
      padding:20,
      marginLeft:0,
      marginRight:0,
      marginTop:0,
      marginBottom: 10,
      backgroundColor:"#fefefe",
      flexDirection:"row",

      shadowColor: "#000",
      shadowOffset: {
	    width: 0,
	    height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,


    },

    Description:{
      marginBottom: 2,
      flex:6,
      flexDirection:"column",
      padding:5
  },

    Title:{
        fontSize:font_styles.todo_header_size,
        fontWeight:font_styles.todo_header_weight,
        marginBottom: 2,
    },
    Text:{

      fontSize:font_styles.todo_text_size,
      fontWeight:font_styles.todo_text_weight,
    }

  });

export default CheckBoxCard