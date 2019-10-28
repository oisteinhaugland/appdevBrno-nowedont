import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CourseNavigator from './navigation/CoursesNavigator';

/*This is the basis component that gets rendered first*/
export default function App() {
  return (
    /*CourseNavigator is the object that helps us navigate between screens,
     check navigation/CoursesNavigator if you wanna see how routes are set up*/
    <CourseNavigator/>

  );
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
