import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

const MainNavCard = ({Title, Description, Color}) => {
    const NavColor = (color) =>{
        if(color == null){
            return styles.NavCardStyle
        }
        else{
            return {
                borderRadius: 10,
                backgroundColor: color,
                padding:12,
                marginLeft:10,
                marginRight:10,
                marginTop:10,
              };
        }
    }
    return (
        <View style={NavColor(Color)}>
            <Text style={styles.Title}>{Title}</Text>
            <Text>{Description}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    NavCardStyle: {
      borderRadius: 10,
      backgroundColor: 'red',
      padding:12,
      marginLeft:10,
      marginRight:10,
      marginTop:10,
    },
    Title:{
        fontSize:23,
        fontWeight:'bold',
        marginBottom: 2,
    },
  });

export default MainNavCard
