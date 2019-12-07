import React, { Component } from 'react'
import {View} from 'react-native'
import CheckBoxCard from '../components/CheckBoxCard';
import Horizontal_spacer from '../components/Horizontal_spacer';

export default class CheckBoxListScreen extends Component {
    static navigationOptions = {
        title: "To Do's",
        headerStyle: {
         // backgroundColor: '#808080',
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: 'normal',
        },
    }
    /*We specify the guideID to know which object from data.json load to the guidedetails under specific checkboxcard */
    NavigateToGuide = (guideID) =>{
        this.props.navigation.navigate('GuideDetails', { ID : guideID});
    }

    render() {
        return (
            <View>
                
                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="" Title="Learning Agreement" Description="Get learning agreement signed at your faculty"  
                identifier="Learning"/>

                

                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="" Title="Accomodation office" Description="Get documents signed" />

                

                <CheckBoxCard Navigate={this.NavigateToGuide}      GuideID="MD" 
                Title="Public transport" 
                Description ="Aquire a tram/buss card"
                />

                

                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="" Title="Waste Tax" Description="Pay Waste tax before deadline" />
                
                
              

                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="" Title="Czech Bank-account" Description="Open czech account to receive scholarship (Free money)"/>

                

                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="" Title="Get crack"/>
            </View>
        )
    }
}
