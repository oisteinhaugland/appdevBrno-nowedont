import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const OtherCategories = () => {
    /*Just a simple styled component no functionality here */
    return (
        <View>
            <Text style={styles.TextStyle}>Other Categories</Text>
            <View style={styles.Border}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    TextStyle: {
        color: 'gray',
        fontSize: 18,
        margin: 10,
    },
    Border:{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginHorizontal:20,
        margin:10,
        
    },
});

export default OtherCategories
