import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';

export default class GuidesListScreen extends Component {
    static navigationOptions = {
        /*title: 'Home --------> Checkbox',*/
        headerStyle: {
         // backgroundColor: '#808080',
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }
    /*We specify the guideID to know which object from data.json load to the guidedetails under specific checkboxcard */
    NavigateToGuide = (guideID) =>{
        this.props.navigation.navigate('GuideDetails', { ID : guideID});
    }

    render() {
        return (
            <View style={styles.container}>
            <Text>Guide List</Text>
            <Button title="Go to Details" onPress={()=>{
                this.NavigateToGuide()
            }}>
            </Button>
            </View>
    )
}
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fefefe',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });