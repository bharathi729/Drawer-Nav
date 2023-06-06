import React,{useState} from "react";
import{View,Text, ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import * as ImagePicker from 'expo-image-picker';

import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageViewer from "./ImageViewer";

const CustomDrawer=(props)=>{
    const nav=useNavigation();
//     const [isActive, setIsActive] = useState(false);

//     const handleClick = ()=>{
//         setIsActive(current => !current);
//    };

const PlaceholderImage = require('./assets/profile.jpg');
const [selectedImage, setSelectedImage] = useState(null);

const pickImageAsync = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    setSelectedImage(result.assets[0].uri);
  } else {
    alert("You did not select any image.");
  }
};

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#00FFFF'}}>
                <ImageBackground 
                    source={require('./assets/aqua-bg.jpg')}
                    style={{padding:20}}>

                    <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} /> 
                    {/* <Image
                        source={require('./assets/profile.jpg')}
                        style={{height:80,width:80,borderRadius:40,marginBottom:10}}
                    /> */}
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'#000',fontSize:20,fontFamily:'cdb',paddingRight:10}}>Bharathi</Text>
                        <Icon name="edit" size={20} onPress={pickImageAsync}/>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'#000',fontFamily:'cdb',paddingRight:10}}>300 Followers</Text>
                        <Icon name="group" size={20}/>
                    </View>
                    </ImageBackground>
                <View style={{flex:1,backgroundColor:"#fff",paddingTop:10}}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc'}}>
                
            <View style={{flexDirection:'row',alignItems:'center',paddingBottom:10}}> 
                <Icon name="share" size={20} />
                <Text style={{marginLeft:6,fontSize:15,fontFamily:'cdb'}} >Share With Friend</Text> 
                </View>

                <TouchableOpacity onPress={()=> nav.navigate("Home")} style={{paddingVertical:8}}>

                {/* ,backgroundColor: isActive ? '#00FFFF' : '',color: isActive ? 'white' : '', */}

               
                <View style={{flexDirection:'row',alignItems:'center'}}> 

                <Icon name="logout" size={20} />
               
                <Text style={{marginLeft:6,fontSize:15,fontFamily:'cdb'}} >Sign Out</Text> 
                </View>
               
                 </TouchableOpacity>
              
            </View> 
        </View>
       
    )
}

export default CustomDrawer;