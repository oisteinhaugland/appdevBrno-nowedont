import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CourseNavigator from './navigation/CoursesNavigator';
import * as Font from 'expo-font';

/*This is the basis component that gets rendered first*/
export default class App extends Component{
    state = {
    fontsLoaded: false
    };
    async componentDidMount(){
      await Font.loadAsync({
          //font1 or 2 can be any name. This'll be used in font-family
           
          palatino: require('./assets/fonts/palatino/palatino.ttf'),//Path to fonts
      });
      this.setState({fontsLoaded: true});
  }
  render(){
    if(this.state.fontsLoaded)
    {
        return <CourseNavigator/> //your application's root view
    }
    else
    {
       return <View style={styles.container}><Text style={{}}>Loading....</Text></View> //Custom view 
    }
    
    /*CourseNavigator is the object that helps us navigate between screens,
     check navigation/CoursesNavigator if you wanna see how routes are set up*/
    
}
}
/*We probably dont need this stylesheet now but its used to style components similar in a css way */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
