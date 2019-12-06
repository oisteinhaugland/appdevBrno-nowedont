import React, { Component } from 'react'
import {View, ScrollView, Text} from 'react-native';

import * as data from '../data/data.json';

export default class GuideDetailsScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Markdown: data[this.props.navigation.getParam('ID', 'NO-ID')],
    }
    console.log(this.props.navigation.getParam('ID', 'NO-ID'));
  }


  render() {
    return (
      <View>
      <ScrollView>
        <Text>Title</Text>
        
      </ScrollView>
      
      </View>
    )
  }
}
