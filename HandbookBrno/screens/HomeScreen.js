import React from 'react'
import {View, FlatList, ScrollView} from 'react-native';
import Header from '../components/Header';
import * as Font from 'expo-font';
import MainNavCard from '../components/MainNavCard';
import OtherCategories from '../components/OtherCategories';
import {StyleSheet} from 'react-native';
import Horizontal_spacer from '../components/Horizontal_spacer';



class HomeScreen extends React.Component {

    /*This is how we navigate to other components, if you're unsure what is routeName check navigation/CoursesNavigation.js
    Also props.navigation methods are only passed down to components specified in Navigator file so if you want to use them in
    sub components you have to do it like i did it here with passing down a function, not sure if there is another way */
    NavigateToGuide = (guideID) =>{
        this.props.navigation.navigate('GuideDetails', { ID : guideID});
    }
    /*Navigation to survival guide */
    NavigateToCheckBox = () => {
        this.props.navigation.navigate({ routeName: 'CheckBoxList' });
    }
    /*This is the Header styles, since React-navigation create its own header we dont need a Header component anymore*/
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
         // backgroundColor: '#808080',
         // fontfamily:palatino,
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: 'normal',
        },
    }
    render() {
        return (
            <ScrollView style={styles.container}>

                <MainNavCard Navigate={this.NavigateToGuide} GuideID="TestNewStructure" Title="Testo" Description="For Students not living at the dorms"
                iconName="md-close"  />    

                {/*<Header/> commented out because react-navigation has its own header
                Also the huge amount of MainNavCards its just for now just to see how it looks
                <OtherCategories/>*/}
                <MainNavCard Navigate={this.NavigateToCheckBox} Title="Start Here - Essential To Do List" Description="Important things to remember to do upon arrival"
                iconName="md-alert"
                iconColor="#f39c12"
                />  

                <MainNavCard Navigate={this.NavigateToGuide} 
                Title="Public Transport" 
                Description="How to get tram / buss cards"
                iconName="md-bus"
                GuideID="TramCard"
                 />


                <MainNavCard Navigate={this.NavigateToGuide} GuideID="WasteFee" Title="Waste Fee" Description="Required if you stay more than 3 months"
                iconName="md-cash" />

                

                <MainNavCard Navigate={this.NavigateToGuide} GuideID="Emergency" Title="Emergency Contacts" Description="See the contacts for emergencies"
                iconName="md-close" />    

                

                <MainNavCard Navigate={this.NavigateToGuide} GuideID="ForeignPolice" Title="Foreign Police" Description="For Students not living at the dorms"
                iconName="md-close"  />    

                
                
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fefefe',
      flex:1
  },

});

export default HomeScreen
