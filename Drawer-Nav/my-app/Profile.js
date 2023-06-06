import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, TextInput, Alert} from 'react-native';
import React, { useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    console.log("Profile component getting mounted")
    const nav=useNavigation();

    const [name, setName] = useState('');

    useEffect(() => {
      getData();
    
    },[]);
    
    const storeData = async() => {
      if(name.length==0){
        alert("Plese enter your name");
      }
      else{
        try{
          await AsyncStorage.setItem('token', name);
          alert('Data saved successfully');
          nav.navigate("Home")
        
        }
        catch(error){
          alert('Error saving data');
        }
      }
    }

    const getData= ()=> {
      try{
        AsyncStorage.getItem('token')
          .then(value=>{
            if (value !== null) {
              nav.navigate('Home')
              console.log(value);
            }
          })
         } catch(error) {
             alert('No Data Found');
         }
  }

 

  return (
    <View style={styles.container}>

      <TextInput style={styles.input} onChangeText={(value) => setName(value)} placeholder="Enter Your Name..." />
      {/* <TextInput secureTextEntry onChangeText={(value) => setPassword(value)} placeholder="Password" /> */}
      <Button onPress={storeData} title="Submit"/>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width:300,
    height:35,
    borderWidth:1,
    borderColor:'#555',
    borderRadius:10,
    backgroundColor:'#fff',
    textAlign:'center',
    fontSize:20,
    marginTop:100,
    marginBottom:10,
  
  }
});
