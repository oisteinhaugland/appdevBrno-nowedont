import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const MainNavCard = ({Title, Description, Color}) => {
    /*Just return the style for the NavCard with a specified Color in props */
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
    return (
        <TouchableHighlight underlayColor="white" activeOpacity={0.85} onPress={() =>{ /*This is where the function to go to other view will be */}}>
            <View style={NavColor(Color)}>
                 <Text style={styles.Title}>{Title}</Text>
                <Text>{Description}</Text>
            </View>
        </TouchableHighlight>
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
    },
    Title:{
        fontSize:23,
        fontWeight:'bold',
        marginBottom: 2,
    },
  });

export default MainNavCard
