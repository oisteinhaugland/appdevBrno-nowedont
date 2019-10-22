import React from 'react'
import {View, Text} from 'react-native'

const Header = () => {
    return (
        <View style={styles2.TitleStyle}>
            <Text style={{color:'white', fontWeight: 'bold', fontSize: 20}}>
                HOMEe
            </Text>
        </View>
    )
};
const styles2 = StyleSheet.create({
    TitleStyle: {
      flex: 1,
      backgroundColor: '#3c6e71',
      alignItems: 'center',
      padding:40,
      paddingTop:50,
    },
  });

export default Header;
