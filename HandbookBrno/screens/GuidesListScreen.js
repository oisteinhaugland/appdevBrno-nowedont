import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';

const GuidesListScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Guide List</Text>
            <Button title="Go to Details" onPress={()=>{
                this.props.navigation.navigate('GuideDetails', { ID : guideID});
            }}>
            </Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });
export default GuidesListScreen
