import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import EnTete from '../components/EnTete';
import Corps from '../components/Corps';

function Favoris (){
    return(
        <View>
            <EnTete/>
            <Text>Salut les zoulous</Text>
        </View>
    );
}
export default Favoris;