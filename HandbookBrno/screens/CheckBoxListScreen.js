import React, { Component } from 'react'
import {View} from 'react-native'
import CheckBoxCard from '../components/CheckBoxCard';

export default class CheckBoxListScreen extends Component {
    static navigationOptions = {
        title: 'Checkbox',
        headerStyle: {
          backgroundColor: '#808080',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }
    NavigateToGuide = (guideID) =>{
        this.props.navigation.navigate('GuideDetails', { ID : guideID});
    }

    render() {
        return (
            <View>
                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="MD" Title="Get your Tram card" Color="#ACDDDE"/>
                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="NewMarkDown" Title="NewMarkdownnewnew" Color="#ACDDDE"/>
                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="" Title="Do that" Color="#ACDDDE"/>
                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="" Title="Dio" Color="#ACDDDE"/>
                <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="" Title="Get crack" Color="#ACDDDE"/>
            </View>
        )
    }
}
