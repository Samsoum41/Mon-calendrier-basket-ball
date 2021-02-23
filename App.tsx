import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favoris from './screens/Favoris';
import HomeScreen from './screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: prop => (
            <Ionicons name="basketball-outline"  size ={prop.size} color={prop.color}/>
          )
        }}/>
        <Tab.Screen name="Settings" component={Favoris} options={{
          tabBarIcon: prop => (
            <Ionicons name = "star-outline" size ={prop.size}  color ={prop.color}/>
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}