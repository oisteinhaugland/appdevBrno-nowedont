import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight, CheckBox, Button} from 'react-native';

const CheckBoxCard = ({Title, Color, Navigate}) => {
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
        
            <View style={NavColor(Color)}>
                <CheckBox style={{flex:1,}} value={false /*This is where we get the vale of the checkbox */} onValueChange={() => {/* This is where the logic for saving the state of checkbox should be */}}/>
                <Text style={styles.Title}>{Title}</Text>
                <TouchableHighlight onPress={Navigate} style={styles.Arrow}>
                    <Text style={{fontSize:23,fontWeight:'bold',}}>
                        ->
                    </Text>
                </TouchableHighlight>
                
            </View>
       
    )
}
const styles = StyleSheet.create({
    NavCardStyle: {
      borderRadius: 10,
      padding:12,
      marginLeft:10,
      marginRight:10,
      marginTop:10,
      backgroundColor:"red",
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
        fontWeight:'bold',
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
