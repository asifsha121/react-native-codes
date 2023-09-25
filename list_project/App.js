import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';

export default function App() {
  const[people,setPeople]=useState([
    {Name:"asifsha",key:"1"},
    {Name:"alsabith",key:"2"},
    {Name:"danat",key:"3"},
    {Name:"amal",key:"4"},
    {Name:"rahul",key:"5"},
    {Name:"danat",key:"6"},
    {Name:"amal",key:"7"},
    {Name:"rahul",key:"8"},
  ])
  const pressHand=(id)=>{
    console.log(id);
  }
  return (
    <View style={styles.container}>
    <FlatList
    data={people}
    keyExtractor={item.key}
    renderItem={({item}) => (
     <TouchableOpacity onPress={()=> pressHand(item.id)}> <Text style={newstyle.item}>
        {item.Name}
      </Text></TouchableOpacity>
          )}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backGroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const newstyle = StyleSheet.create({
  item: {
    fontSize:45,
    backgroundColor: 'pink',
    padding:30,
    marginTop:24,
    paddingRight:150
  },
});


