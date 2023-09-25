import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
          <Text style={styles.title}> My TODOS </Text>
          </View>
    )
}

const styles=StyleSheet.create({
    header: {
        height:110,
        paddingTop:70,
        backgroundColor:'coral',
    },
    title:{
    fontSize:20,
    textAlign:'center', 
    color:"white",
    fontWeight:'bold',
}
}); 