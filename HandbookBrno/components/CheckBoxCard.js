import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight, CheckBox, Button} from 'react-native';
import Todo_Button from '../components/todo_button';

const CheckBoxCard = ({Title, Color, Navigate, GuideID}) => {
    /*Just return the style for the NavCard with a specified Color in props
    no need to get into this, just know that its used to style the cards color */
    const NavColor = (color) =>{
        if(color == null){
            return styles.NavCardStyle
        }
        else{
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
                
                <Text style={styles.Title}>{Title}</Text>
                
                <Todo_Button></Todo_Button>

                <TouchableHighlight onPress={() =>{Navigate(GuideID)}} style={styles.Arrow}>
                    <Text style={{fontSize:23}}>
                    
                    </Text>
                </TouchableHighlight>
                
            </View>
       
    )
}
const styles = StyleSheet.create({
    NavCardStyle: {
      borderRadius: 0,
      padding:20,
      marginLeft:0,
      marginRight:0,
      marginTop:5,
      marginBottom: 5,
      backgroundColor:"#fefefe",
      flexDirection:"row",
     
    //shadowColor: "#000",
     // shadowOffset: {
         // width: 0,
      //    height: 2,
     // },
      //shadowOpacity: 0.25,
      //shadowRadius: 3.84,
      
      //elevation: 5,
    },
    Title:{
        fontSize:23,
        fontWeight:'normal',
        marginBottom: 2,
        flex:5,
    },
    Arrow:{
        flex:1,
        justifyContent:"center",
         alignItems:"center"
    }
  });

export default CheckBoxCard
