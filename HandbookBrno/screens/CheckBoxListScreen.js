import React, { Component } from 'react'
import {View} from 'react-native'
import CheckBoxCard from '../components/CheckBoxCard';
import Horizontal_spacer from '../components/Horizontal_spacer';

export default class CheckBoxListScreen extends Component {
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
            <View>
                
                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="MD" Title="Get your Tram card" />

                <Horizontal_spacer></Horizontal_spacer>

                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="NewMarkDown" Title="NewMarkdownnewnew" />
                
                <Horizontal_spacer></Horizontal_spacer>
                
                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="" Title="Do that" />

                <Horizontal_spacer></Horizontal_spacer>

                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="" Title="Dio" />

                <Horizontal_spacer></Horizontal_spacer>

                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="" Title="Get crack"/>
            </View>
        )
    }
}
