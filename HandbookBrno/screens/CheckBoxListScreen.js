import React, { Component } from 'react'
import { View } from 'react-native'
import CheckBoxCard from '../components/CheckBoxCard';
export default class CheckBoxListScreen extends Component {
    static navigationOptions = {
        title: 'Survival guide',
        headerStyle: {
            backgroundColor: '#808080',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
    NavigateToDetails = () => {
        this.props.navigation.navigate({ routeName: 'CheckBoxDetails' });
    }

    render() {
        return (
            <View>
                <CheckBoxCard Navigate={this.NavigateToDetails} Title="Paid waste fee" Color="#ACDDDE" />
                <CheckBoxCard Navigate={this.NavigateToDetails} Title="Have tram card" Color="#ACDDDE" />
                <CheckBoxCard Navigate={this.NavigateToDetails} Title="Paid rent" Color="#ACDDDE" />
                <CheckBoxCard Navigate={this.NavigateToDetails} Title="Opened Czech bank account" Color="#ACDDDE" />
            </View>
        )
    }
}
