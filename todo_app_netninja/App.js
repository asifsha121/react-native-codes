import React,{useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

export default function App() {
  const[todo,setTodo]=useState([
    {text:'buy coffee',key:'1'},
    {text:'create a app',key:'2'},
    {text:'play no cricket',key:'3'}
  ])
  const func=({  item  })=>(
    <Text>{item.text}</Text>
  );
  return (
    <View style={styles.container}>
      <Header />
      <View styles={styles.content}>
        {/*forms*/}
        <View style={styles.list}>
          <FlatList 
             data={todo}
             renderItem={func}

          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:60,
    marginLeft:40

  }
});
