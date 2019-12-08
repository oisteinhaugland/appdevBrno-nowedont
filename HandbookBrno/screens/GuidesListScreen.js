import React from 'react'
import { ScrollView, Text, StyleSheet, Button } from 'react-native';

const GuidesListScreen = (props) => {
    return (
        <ScrollView>
            <Text>Here you can find places where
                to eat or buy food. </Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate({
                    routeName: 'GuideDetails',
                })
            }}>
            </Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default GuidesListScreen
