import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons'
import { db, collection, addDoc, doc, onSnapshot, query, USERS} from "../firebase/Config";

export default function HomeScreen({navigation}){
useLayoutEffect(()=>{
    navigation.setOptions({
        headerStyle:{
            backgroundColor: 'salmon'
        }
        
    })
}, [])

const [pievalue, setPievalue] = useState([])

//haetaan tietokannasta henkilöiden nimet ja piirakkamäärät
useEffect(()=>{
    const q = query(collection(db, USERS))

    const unsubscribe = onSnapshot(q,(querySnapshot)=>{
      const tempMessages = []

      querySnapshot.forEach((doc)=>{
        const messageObject={
          id: doc.id,
          character: doc.data().name,
          pies: doc.data().pies,
        }
        tempMessages.push(messageObject)
      })
        setPievalue(tempMessages)
      })
      
      return () => {
        unsubscribe()
      }
    
  },[])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
            <Text style={styles.heading}>Here you see up-to-date information of one's pies</Text>
            
{
    pievalue.map((bills)=>(
        <View key={bills.id} style={styles.box}>
            <Text style={styles.characters}>{bills.character}: {bills.pies}</Text>
        </View>
    ))
}
            </ScrollView>
        </SafeAreaView>
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
    characters: {
        fontSize: 20,
        paddingBottom: 10,
        textAlign: "center"
    },
    separator:{
        marginVertical: 10
    },
    box:{
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#C0D6DF',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10
    }
})