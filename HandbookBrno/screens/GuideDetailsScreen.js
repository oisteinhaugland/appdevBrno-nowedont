import React, { Component } from 'react'
import {View, ScrollView, Text, FlatList, StyleSheet} from 'react-native';

import * as data from '../data/data.json';

export default class GuideDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Title', ''),
    };
  };
  
  constructor(props) {
    super(props)
    this.state = {
      GuideData: data["guides"][this.props.navigation.getParam('ID', 'NO-ID')],
    }

   // console.log(data["guides"][this.props.navigation.getParam('ID', 'NO-ID')]);
  }
  componentWillMount(){
    
    this.props.navigation.setParams({
      Title: this.state.GuideData.Title
    });

  }

  renderParagraph = ({header, body}) =>{
    
    return (
      <View style={styles.BodyBlock}>
        <Text style={styles.Header}>{header}</Text>
        <Text style={styles.BodyText}>{body}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
      <ScrollView>
        {/*<View style={styles.Title}><Text style={styles.TitleText}>{this.state.GuideData.Title}</Text></View>*/}
        <FlatList
        data={this.state.GuideData.ContentArray}
        renderItem={({ item }) => <this.renderParagraph header={item.header} body={item.body} />}
        keyExtractor={item => item.header}
      />
      </ScrollView>
      
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Title: {
      alignSelf:"center",
  },
  TitleText:{
    fontSize:40,
  },
  BodyBlock:{
    padding:15,
    marginLeft:5,
  },
  Header:{
    fontSize:30,
    marginBottom:5,
    
  },
  BodyText:{
    fontSize:20,
    lineHeight:40,
  }

});
