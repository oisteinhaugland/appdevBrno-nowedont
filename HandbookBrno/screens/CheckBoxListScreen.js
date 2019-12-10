import React, { Component } from 'react'
import {View, ScrollView, FlatList} from 'react-native'
import CheckBoxCard from '../components/CheckBoxCard';
import Horizontal_spacer from '../components/Horizontal_spacer';
import { AsyncStorage } from 'react-native';

export default class CheckBoxListScreen extends Component {
    static navigationOptions = {
        title: "To Do's",
        headerStyle: {
         // backgroundColor: '#808080',
        },
        //headerTintColor: '#333',
        headerTitleStyle: {
          //fontWeight: 'normal',
        },
    }
    /*We specify the guideID to know which object from data.json load to the guidedetails under specific checkboxcard */
    NavigateToGuide = (guideID, HeaderTitle) =>{
        if(guideID == "" || guideID == null){
          guideID = "404";
        }
        this.props.navigation.navigate('GuideDetails', { ID : guideID, HeaderTitle:HeaderTitle});
    }
    componentDidMount(){
    }
    _storeData = async (itemName, itemValue) => {
        try {
          await AsyncStorage.setItem(itemName, itemValue);
        } catch (error) {
          // Error saving data
        }
      };
      _retrieveData = async (itemName) => {
        try {
          const value = await AsyncStorage.getItem(itemName);
          if (value !== null) {
            // We have data!!
            return value;
          }
        } catch (error) {
          // Error retrieving data
        }
      };
    RenderCheckBoxCards(){
        const { params} = this.props.navigation.state;
        let CheckBoxCards = [
            <CheckBoxCard Navigate={this.NavigateToGuide} Title="Learning Agreement" Description="Get learning agreement signed at your faculty"  
            identifier="Learning" setIconColour={params.setIconColour} setIconName={params.setIconName}/>,
            <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="" 
            Title="Accomodation office" Description="Get documents signed" identifier="WasteFee" setIconColour={params.setIconColour} setIconName={params.setIconName}/>,
            <CheckBoxCard Navigate={this.NavigateToGuide} 
            GuideID="TramCard" 
            Title="Public transport" 
            Description ="Aquire a tram/buss card"
            identifier="PublicTransport"
            setIconColour={params.setIconColour} setIconName={params.setIconName}
            />,
            <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="WasteFee" Title="Waste Tax" 
            Description="Pay Waste tax before deadline" identifier="WasteTax" setIconColour={params.setIconColour} setIconName={params.setIconName}/>,
            <CheckBoxCard Navigate={this.NavigateToGuide} GuideID="" Title="Czech Bank-account" 
            Description="Open czech account to receive scholarship (Free money)" identifier="bank" setIconColour={params.setIconColour} setIconName={params.setIconName}/>
        ]
        this._storeData("CheckboxCount", CheckBoxCards.length.toString());


        return CheckBoxCards;
    }

    render() {
        return (
            <ScrollView>
                <FlatList
                    data={this.RenderCheckBoxCards()}
                    renderItem={({ item }) => item}
                    keyExtractor={item => item.props.identifier}
                />
              
            </ScrollView>
        )
    }
}
