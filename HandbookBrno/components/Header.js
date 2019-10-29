import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

/*Initial header but probably we gonna have to deprecate this since its not gonna be used, since react navigation has its own header*/
const Header = () => {
    return (
        <View style={styles2.TitleStyle}>
            <Text style={{color:'white', fontWeight: 'bold', fontSize: 20}}>
                Home
            </Text>
        </View>
    )
};
const styles2 = StyleSheet.create({
    TitleStyle: {
      flex: 1,
      backgroundColor: '#808080',
      alignItems: 'center',
      padding:40,
      paddingTop:50,
    },
  });

export default Header;
