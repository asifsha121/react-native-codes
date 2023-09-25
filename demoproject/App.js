
import { StyleSheet, Text, TextInput, View,Button} from 'react-native';

export default function App() {
  // const[Reminder,setReminder]=useState([])
  // const[newReminder,setNewReminder]=useState('')

  // const handlesetReminder=(event)=>{
  //   setNewReminder(event.target.value)
  // }
  // const addReminder=()=>{
  //   if(newReminder.trim()){
  //     setReminder([...Reminder,newReminder])
  //   }
  // }
  // const deletebutton=(index)=>{
  //   setReminder(Reminder.filter((item,itemIndex)=>itemIndex !==index))
  // }




  return (
    <View >
      <View style={styles.header1}>
        <Text style={fontstyles.headerfont}>TODO App</Text>
      </View>
      <View style={styles.container1}>
      <TextInput style={styles.TextInput} placeholder= "   🖊️ Add item"/>
      
      <View style={fontstyles.button}>
      <Button 
      color="#503C1D"
      title="add"
      />
      </View>


      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput:{
    width:300,
    height:50,
    borderWidth:1,
    alignSelf:'center',
    marginTop:35,
    backgroundColor:"#D8B274",
  },
  container: {
    flex:1,
    backgroundColor: 'black',
  },
  container1:{
    flex:1,
    backgroundColor:"red",

  },
  header1:{
    backgroundColor:"orange",
    width:500,
    height:130,
    justifyContent:"center",
    alignSelf:'center',  
  },
});
const fontstyles = StyleSheet.create({
headerfont:{
  fontSize:30,
  color:'white',
  paddingTop:60,
  alignSelf:'center',
  fontFamily:"sans-serif-condensed",
},
button:{
  backgroundColor:'white',
  width:150,
  alignSelf:'center',
  marginTop:20,

},
})
