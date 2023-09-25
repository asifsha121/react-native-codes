import react,{useState} from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';
export default function App() {
  const [name, setName ]=  useState("asif");
  const [age, setAge]= useState("18")
  const myName = (val) => {
  setName(val);
}
  return (
    <View style={styles.container}>
      <Text> His name is {name} his age is{age}</Text>
      <TextInput style={styles.button} placeholder="enter name" onChangeText={myName}/>
      <TextInput style={styles.button} placeholder="enter age" onChangeText={(val)=> setAge(val)}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    padding:20,
    borderWidth:5,
    backgroundColor:"grey",
  }
});
