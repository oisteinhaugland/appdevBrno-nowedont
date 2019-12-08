import React, { Component } from 'react'
import {View, ScrollView} from 'react-native'
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
            <ScrollView>
                
                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="LearningAgreement" Title="Learning Agreement" Description="Get learning agreement signed at your faculty"  
                identifier="Learning"/>

                

                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="404" Title="Accomodation office" Description="Get documents signed" identifier="WasteFee" />

                

                <CheckBoxCard Navigate={this.NavigateToGuide} 
                GuideID="TramCard" 
                Title="Public transport" 
                Description ="Aquire a tram/buss card"
                identifier="PublicTransport"
                />

                

                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="WasteFee" Title="Waste Tax" Description="Pay Waste tax before deadline" identifier="WasteTax" />
                
                
              

                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="404" Title="Czech Bank-account" Description="Open czech account to receive scholarship (Free money)" identifier="bank"/>

                

                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="404" Title="Get crack" identifier="GetCrack"/>
            </ScrollView>
        )
    }
}
