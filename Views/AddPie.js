
import { db, USERS, updateDoc, collection, increment, query, onSnapshot, doc } from "../firebase/Config";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, SafeAreaView, ScrollView } from "react-native";

export default function AddPie({navigation}) {

useLayoutEffect(()=>{
        navigation.setOptions({
            headerStyle:{
                backgroundColor: 'salmon'
            }
})
},[])

const [newPie, setNewPie] = useState(0)
const [pievalue, setPievalue] = useState([])

//haetaan tietokannasta henkilöiden nimet
useEffect(()=>{
    const q = query(collection(db, USERS))

    const unsubscribe = onSnapshot(q,(querySnapshot)=>{
      const tempMessages = []

      querySnapshot.forEach((doc)=>{
        const messageObject={
          id: doc.id,
          character: doc.data().name,
          pies: doc.data().pies,
          users: USERS
        }
        tempMessages.push(messageObject)
      })
        setPievalue(tempMessages)
      })
      
      return () => {
        unsubscribe()
      }
    
  },[])

//toiminto piirakoiden lisäämiseen ja tiedon lähetys tietokantaan
const update = async(person) =>{
    console.log(person)
    const docuRef = doc(db, USERS, person)
    await updateDoc(docuRef,{
        pies: increment(1)
    }).catch(error => console.log(error))
}



const Separator = () => <View style={styles.separator} />;

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView >
            <Text style={styles.heading}>Add pies to your selected character</Text>
            
{
    pievalue.map((bills)=>(
        <View key={bills.id} style={styles.box}>
            <Text style={styles.characters}>{bills.character}: </Text>
            <Button title="Add" color="salmon" onPress={()=>update(bills.id)}></Button>
            <Separator></Separator>
        </View>
    ))
}
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    navButton: {
        marginRight: 5,
        padding: 4,
    },
    heading:{
        fontSize: 24,
        paddingBottom: 20
    },
    characters: {
        fontSize: 20,
        paddingBottom: 20,
        textAlign: "center"
    },
    separator:{
        marginVertical: 30
    },
    box:{
        paddingVertical: 20,
        paddingHorizontal: 50,
    }
})