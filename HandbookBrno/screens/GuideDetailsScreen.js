import React, { Component } from 'react'
import {View, ScrollView, Text, FlatList, StyleSheet, Image, Linking} from 'react-native';

import * as data from '../data/data.json';

import {images} from '../data/Images.js';

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
        <FlatList
        data={body}
        renderItem={({ item }) => {
          if(item.Text != null){
            //Normal body text style it here !!!!
            return <Text style={styles.BodyText}>{item.Text}</Text>
          }
          if(item.ImageName !=null){
            for(let i =0; i< images.length;i++){
              if(images[i].imgName == item.ImageName){
                //Image styling do it here if needed Wrap it in a view for styling later
                return <Image style={{width: item.Width, height: item.Height}} source={images[i].uri}/>
              }
            }
            return <Text>ImgNotFound</Text>
          }
          if(item.LinkText !=null){
            //LINK styles here
            return <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL(item.Link)}>
                    {item.LinkText}
                   </Text>
          }
          //console.log(item);
        }}
        keyExtractor={item => item.id}
      />
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
