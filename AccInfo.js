import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function AccInfo({navigation}) {

useLayoutEffect(()=>{
        navigation.setOptions({
            headerStyle:{
                backgroundColor: 'salmon'
            }
})
},[])

    return(
        <View style={styles.container}>
            <Text> Account Info
            </Text>
        
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    navButton: {
        marginRight: 5,
        padding: 4,
    }
})