import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const MainNavCard = ({Title, Description, Color, Navigate}) => {
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
    /*We use TouchableHighlight which is a react-native component to make the cards pressable,
    onPress uses the function passed down from homeScreenComponent, the rest are styles
    also needs a little bit of working on the styles since it highlights the whole section not just the card*/
    return (
        <TouchableHighlight underlayColor="white" activeOpacity={0.5} onPress={Navigate}>
            <View style={NavColor(Color)}>
                 <Text style={styles.Title}>{Title}</Text>
                <Text>{Description}</Text>
            </View>
        </TouchableHighlight>
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
      borderTopColor:"rgba(30,30,30,1)",
      borderBottomColor:"rgba(30,30,30,1)",
      borderTopWidth:0.5,
      borderBottomWidth:0.5,
      backgroundColor:"#f7f7f7",
     
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
    },
  });

export default MainNavCard
