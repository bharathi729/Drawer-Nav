import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import Settings  from './Settings';
import Profile from './Profile';
import Notification from './Notification';
import Contact from './Contact';
import CustomDrawer from './CustomDrawer';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Modaleg from './Modaleg';


const Drawer=createDrawerNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      {/* initialRouteName="Home"  */}
      <Drawer.Navigator drawerContent={props=> <CustomDrawer{...props}/>}
      screenOptions={{
        
        headerShown:false,
        drawerActiveBackgroundColor:'#00FFFF',
        drawerActiveTintColor:'#fff',
        drawerInactiveTintColor:'#333',
        drawerLabelStyle:{fontSize:15,marginLeft:-25,fontFamily:'cdb'}
      }}>

        <Drawer.Screen  name="Home" component={Home} options={{headerShown:false,
        drawerIcon:({color}) => (
          <Icon name="home" size={22} color={color} />
         )
        }}/>
        <Drawer.Screen name="Profile" component={Profile} options={{
          drawerIcon:({color}) => (
            <Icon name="person" size={22} color={color} />
           )
          }} />
        <Drawer.Screen name="Settings" component={Settings} 
          options={{
            drawerIcon:({color}) => (
              <Icon name="settings" size={22} color={color} />
             )
            }}/>
        <Drawer.Screen name="Contact Us" component={Contact} 
          options={{
            drawerIcon:({color}) => (
              <Icon name="call" size={22} color={color} />
             )
            }} />
        <Drawer.Screen name="Notifications" component={Notification} 
          options={{
            drawerIcon:({color}) => (
              <Icon name="notifications" size={22} color={color} />
             )
            }} />
        
        <Drawer.Screen name="Modal" component={Modaleg}options={{
          drawerIcon:({color}) => (
            <Icon name="margin" size={22} color={color} />
           ) 
          }} />
        
      </Drawer.Navigator>

    </NavigationContainer>

  );
}
