import React, { useLayoutEffect, useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import { convertFirebaseTimeStampToJS } from "../helpers/Functions";
import { db, USERS, updateDoc, collection, increment, query, onSnapshot, doc, addDoc, serverTimestamp } from "../firebase/Config";
import { orderBy } from "firebase/firestore";

export default function AccInfo({navigation}) {

useLayoutEffect(()=>{
        navigation.setOptions({
            headerStyle:{
                backgroundColor: 'salmon'
            }
})
},[])

const [mesages, setMesages] = useState([])

useEffect(()=>{
    const q = query(collection(db, USERS, "eikka", "messages"), orderBy('created', 'desc'))

    const unsubscribe = onSnapshot(q,(querySnapshot)=>{
      const tempMessages = []

      querySnapshot.forEach((doc)=>{
        const messageObject={
          id: doc.id,
          text: doc.data().text,
          created: convertFirebaseTimeStampToJS(doc.data().created)
        }
        tempMessages.push(messageObject)
      })
        setMesages(tempMessages)
      })
      
      return () => {
        unsubscribe()
      }
    
  },[])





    return(
        <SafeAreaView style={styles.container}>
        
        <ScrollView>
        <Text style={styles.heading}>Here you can read messages that arrived via your pies.</Text>
            {
            mesages.map((message)=>(
                <View style={styles.message} key={message.id}>
                    <Text style={styles.messageInfo}>{message.created}</Text>
                    <Text>{message.text}</Text>
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
    message:{
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'cornsilk',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10
       },
       messageInfo:{
        fontSize: 12,
       },
})