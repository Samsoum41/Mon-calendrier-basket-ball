import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import EnTete from '../components/EnTete';
import Corps from '../components/Corps';

const HomePage = () =>{
  return(
    <View style={{backgroundColor:'purple', flexDirection:'column', flex: 1}}>
      <EnTete/>
      <Corps/>
    </View>
  )
}

const ceStyle = StyleSheet.create({
  corps2:{
    height:200,
    backgroundColor:'yellow'
  },
  text:{
    fontSize:20,
    color:'black',
    height:200
  }
})
export default HomePage;