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

const Megs = () =>{
//tähän voisi laittaa sen toiminnon että se hakee ne viestit näkyviin
    return(
<Text>No messages.</Text>
    )
}


    return(
        <View style={styles.container}>
        <Text style={styles.heading}>Here you can read messages that arrived via your pies.</Text>
        <Megs></Megs>
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
    },
    heading:{
        fontSize: 24,
        paddingBottom: 20,

    },
})