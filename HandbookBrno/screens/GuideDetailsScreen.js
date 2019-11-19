import React, { Component } from 'react'
import {View, ScrollView} from 'react-native';
import Markdown from 'react-native-simple-markdown';

import * as data from '../data/data.json';

export default class GuideDetailsScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Markdown: data[this.props.navigation.getParam('ID', 'NO-ID')],
    }
  }


  render() {
    return (
      <View>
      <ScrollView>
        <Markdown>
          {this.state.Markdown}
          {console.log(this.state.Markdown)}
          {console.log(this.props.navigation.getParam('ID', 'NO-ID'))}
        </Markdown>
      </ScrollView>
      
      </View>
    )
  }
}
