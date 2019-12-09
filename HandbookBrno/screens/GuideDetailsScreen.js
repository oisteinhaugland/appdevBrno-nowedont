import React, { Component } from 'react'
import {View, ScrollView, Text, FlatList, StyleSheet, Image, Linking, TouchableHighlight} from 'react-native';

import * as data from '../data/data.json';

import {images} from '../data/Images.js';

import {font_styles,color_scheme} from '../assets/general_styles/general_style.js';

export default class GuideDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('HeaderTitle', ''),
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
            return <View style={styles.text_view}><Text style={styles.BodyText}>{item.Text}</Text></View>
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
          if(item.LinkToHeader !=null){
            //Style the Link to header here !!!!!
            //You add it like this in the data.json {"LinkToHeader":"This is gonna be the first link", "header":"Long term tickets", "id":"5"},
            return <TouchableHighlight underlayColor="white" onPress={() => {this.GotoItemByHeader(item.header)}}><Text>{item.LinkToHeader}</Text></TouchableHighlight>
          }
          //console.log(item);
        }}
        keyExtractor={item => item.id}
      />
      </View>
    );
  }
  GotoItemByHeader = (header) =>{
    let theItemWeNeed;
    this.state.GuideData.ContentArray.forEach(element => {
      if(element.header == header){
        theItemWeNeed = element;
      }
    });
    //if you want to change the scrolling by index use this
    //this.flatListRef.scrollToIndex({animated: true, index:1});
    this.flatListRef.scrollToItem({animated: true, item:theItemWeNeed});

  }
  render() {
    return (
      <View>
      
        {/*<View style={styles.Title}><Text style={styles.TitleText}>{this.state.GuideData.Title}</Text></View>*/}
        <FlatList
        data={this.state.GuideData.ContentArray}
        ref={(ref) => { this.flatListRef = ref; }}
        renderItem={({ item }) => <this.renderParagraph header={item.header} body={item.body} />}
        keyExtractor={item => item.header}
      />
      
      
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Title: {
      alignSelf:"center",
  },
  BodyBlock:{
    backgroundColor:"#fefefe",
    marginHorizontal:22.5,
    marginVertical:10,
    paddingHorizontal:22.5,
    paddingVertical:15,
    marginBottom:30,
    //borderWidth:0.5,
    
    borderStyle:'solid',
    borderColor:"#333",

    
       //drop shadow
       shadowColor: "#000",
       shadowOffset: {
         width: 0,
         height: 5,
       },
       shadowOpacity: 0.3,
       shadowRadius: 3.84,
       elevation: 5
  },

  Header:{
    fontSize:font_styles.guide_header_size,
    fontWeight: font_styles.guide_header_weight,
    marginBottom:5,
  },
  
  BodyText:{
    fontSize:font_styles.guide_text_size,
    fontWeight: font_styles.guide_text_weight,
    lineHeight:font_styles.guide_text_lineheight,
  },

  text_view:{
    marginBottom:20,   
  }

});
