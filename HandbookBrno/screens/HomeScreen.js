import React from 'react'
import {View, FlatList} from 'react-native';
import Header from '../components/Header';
import MainNavCard from '../components/MainNavCard';
import OtherCategories from '../components/OtherCategories';

class HomeScreen extends React.Component {
    /*This is how we navigate to other components, if you're unsure what is routeName check navigation/CoursesNavigation.js
    Also props.navigation methods are only passed down to components specified in Navigator file so if you want to use them in
    sub components you have to do it like i did it here with passing down a function, not sure if there is another way */
    NavigateToGuide = () =>{
        this.props.navigation.navigate({routeName: 'GuideList'});
    }
    /*This is the Header styles, since React-navigation create its own header we dont need a Header component anymore*/
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#808080',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }
    render(){
        return (
            <View>
                {/*<Header/> commented out because react-navigation has its own header
                Also the huge amount of MainNavCards its just for now just to see how it looks*/}
                <MainNavCard Navigate={this.NavigateToGuide} Title="Survival Guide" Description="Something, Something, Something, Something,..."/>
                <OtherCategories/>
                <MainNavCard Navigate={this.NavigateToGuide} Title="Another Guide" Description="Something, Something, Something, Something,..." Color="#87CEFA"/>
                <MainNavCard Navigate={this.NavigateToGuide} Title="Another Guide" Description="Something, Something, Something, Something,..." Color="#81D2C7"/>
                <MainNavCard Navigate={this.NavigateToGuide} Title="Another Guide" Description="Something, Something, Something, Something,..." Color="#E0E0E2"/>    
                <MainNavCard Navigate={this.NavigateToGuide} Title="Another Guide" Description="Something, Something, Something, Something,..." Color="#416788"/>    
            </View>
        );
    }

}

export default HomeScreen
