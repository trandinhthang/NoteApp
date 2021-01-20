
import React from 'react';
import {
  Text,
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import PriorityScreen from './src/screens/PriorityScreen';
import StatusScreen from './src/screens/StatusScreen';
import NoteScreen from './src/screens/NoteScreen';

const Drawer = createDrawerNavigator();
const DrawerRoutes = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" >
      <Drawer.Screen name="Home" component={HomeScreen} 
                     options={{ drawerIcon: ( {focused,color,size}) =>
            <Ionicons name="home" color="#e88c02" size={30}/>}} 
      />
      <Drawer.Screen name="Category" component={CategoryScreen} 
                     options={{ drawerIcon: ( {focused,color,size}) =>
            <Ionicons name="shapes-sharp" color="#e88c02" size={30}/>}} 
      />
      <Drawer.Screen name="Priority" component={PriorityScreen} 
                     options={{ drawerIcon: ( {focused,color,size}) =>
            <Ionicons name="md-navigate-sharp" color="#e88c02" size={30}/>}} 
      />
      <Drawer.Screen name="Status" component={StatusScreen} 
                     options={{ drawerIcon: ( {focused,color,size}) =>
            <Ionicons name="md-map-sharp" color="#e88c02" size={30}/>}} 
      />
      <Drawer.Screen name="Note" component={NoteScreen} 
                     options={{ drawerIcon: ( {focused,color,size}) =>
            <Ionicons name="md-newspaper-sharp" color="#e88c02" size={30}/>}} 
      />
    </Drawer.Navigator>
  )
}

const Stack = createStackNavigator();
const App = () => {
  return (
     <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name= "Home" component={DrawerRoutes} /> 
      </Stack.Navigator>
     </NavigationContainer>
  );
}


export default App;
