import React, { useEffect, useState,useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button,View ,SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();


export default function Home() {
  const nav=useNavigation();
  console.log("Home component getting mounted")
    
  const drawerStatus=useDrawerStatus();

  console.log(drawerStatus)
  
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const [fontloaded, setFontLoaded] = React.useState(false);
    const [name,setName]=useState('')

    useEffect(() => {
      getData();
    
    },[]);

    React.useEffect(() => {
        Font.loadAsync({
          cdb: require("./assets/fonts/NotoSerifKhojki-VariableFont_wght.ttf"),
        
        }).then(() => setFontLoaded(true));
      }, []);

   

    const logout=async()=>{
      try{
        await AsyncStorage.clear()
        nav.navigate('Profile')
      }
      catch(error){
        console.log(error);
      }
    }

    const getData= ()=> {
      try{
        AsyncStorage.getItem('token')
          .then(value=>{
            if (value !== null) {
              setName(value)
              nav.navigate('Profile')
              console.log(value);
            }
          })
         } catch(error) {
             alert('No Data Found');
         }
  }
  if(fontloaded){
    return (

      <SafeAreaView style={{
        paddingTop:"10%",
        paddingLeft:25,
        display:'flex',
        flexDirection:"row",
         flex: 1,
          alignItems: 'center', 
          justifyContent: 'center' }}
        onLayout={onLayoutRootView}>


        <View style={styles.container}>
          <Text style={{fontFamily:'cdb'}}>Hey {name}!!! Welcome To Home Screen!!!</Text>
          <Button title='Open'onPress={()=> nav.openDrawer()} />
          <Button title='Close' onPress={()=> nav.closeDrawer()} />
          <Button title='Toggle' onPress={()=> nav.toggleDrawer()} />
        
          <Button title='Go To Settings' onPress={()=> nav.navigate("Settings")} /> 
          <Button title='logout' onPress={logout} /> 
  
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    );
    
  }
    else{
      return null
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});












