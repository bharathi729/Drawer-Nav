import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';



// export default function Contact() {
   

    const people=[
      {name:'aqua',id:'1'},
      {name:'blue',id:'2'},
      {name:'yellow',id:'3'},
      {name:'red',id:'4'},
      {name:'pink',id:'5'},
      {name:'green',id:'6'},
      {name:'orange',id:'7'},
      {name:'black',id:'8'},
      {name:'peach',id:'9'},
      {name:'turquoise',id:'10'},
    ];


const Separator = () => <View style={styles.itemSeparator} />;

const LeftSwipeActions = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center' }} >
      <Text
        style={{
          color: '#40394a',
          paddingHorizontal: 10,
          fontWeight: '600',
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
      >
        Bookmark
      </Text>
    </View>
  );
};

const rightSwipeActions = () => {
  return (
    <View style={{ backgroundColor: '#ff8303',justifyContent: 'center',alignItems: 'flex-end',}} >
      <Text
        style={{
          color: '#1b1a17',
          paddingHorizontal: 10,
          fontWeight: '600',
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
      >
        Delete
      </Text>
    </View>
  );
};

const swipeFromLeftOpen = () => {
  alert('Swipe from left');
};

const swipeFromRightOpen = () => {
  alert('Swipe from right');
};

const ListItem = ({ name }) => (
  <Swipeable
    renderLeftActions={LeftSwipeActions}
    renderRightActions={rightSwipeActions}
    onSwipeableRightOpen={swipeFromRightOpen}
    onSwipeableLeftOpen={swipeFromLeftOpen}
  >
    <View style={{ paddingHorizontal: 30,paddingVertical: 20,backgroundColor: 'white',}}>
      <Text style={{ fontSize: 24 }} >{name}</Text>
    </View>
  </Swipeable>
);

const Contact = () => {
  console.log("Contact Us component getting mounted")
  const nav=useNavigation();
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Text style={{ textAlign: 'center', marginVertical: 30,fontSize:20,fontWeight:'bold',marginBottom:15}}>Swipe right or left</Text>
        <FlatList
          data={people}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem {...item} />}
          ItemSeparatorComponent={() => <Separator />}
        />
        {/* <Button title='Reanimation' onPress={()=> nav.navigate("Reanimated")} /> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: 'aqua',
  },
  
});

export default Contact;










    // const nav=useNavigation();
//   return (
//     <View style={styles.container}>
//      <Text style={{fontFamily:'cdb'}}>FlatList Items!!!</Text>
  
//     <FlatList
//         data={people}
//         renderItem={({item})=>(
//           <Text style={styles.item}>{item.name}</Text>
//         )}
//       />
    
//     </View>

//     //  {/* <Button title='Back To Home' onPress={()=> nav.navigate("Home")} /> 
//     //   <StatusBar style="auto" /> */}
//    ) ; 
  
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop:40,
//     paddingHorizontal:20,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },

//   item:{
//     marginTop:24,
//     padding:30,
//     backgroundColor:'aqua',
//     fontSize:24,
//     marginHorizontal:10,
//   }
// });
