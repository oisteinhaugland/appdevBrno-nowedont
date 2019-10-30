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
    NavigateToGuide = () =>{
        this.props.navigation.navigate({routeName: 'GuideDetails'});
    }

    render() {
        return (
            <View>
                <CheckBoxCard Navigate={this.NavigateToGuide} Title="Survival Guide" Color="#ACDDDE"/>
                <CheckBoxCard Navigate={this.NavigateToGuide} Title="Do this" Color="#ACDDDE"/>
                <CheckBoxCard Navigate={this.NavigateToGuide} Title="Do that" Color="#ACDDDE"/>
                <CheckBoxCard Navigate={this.NavigateToGuide} Title="Dio" Color="#ACDDDE"/>
                <CheckBoxCard Navigate={this.NavigateToGuide} Title="Get crack" Color="#ACDDDE"/>
            </View>
        )
    }
}
