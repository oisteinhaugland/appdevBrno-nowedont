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
                <CheckBoxCard Navigate={this.NavigateToGuide} Title="Survival Guide" Color="cyan"/>
                <CheckBoxCard Navigate={this.NavigateToGuide} Title="Do tihs" Color="red"/>
                <CheckBoxCard Navigate={this.NavigateToGuide} Title="Survival Guide Survival Guide" Color="cyan"/>
            </View>
        )
    }
}
