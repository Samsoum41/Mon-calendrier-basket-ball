import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';

const Item = (props) =>{
    let [fontsLoaded] = useFonts({'Tillilium':require('../font/Titillium_Web/TitilliumWeb-Regular.ttf')})
    return(
        <View style={style.item}>
            <Text>{props.fstTeam} VS {props.scdTeam}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    text:{
        fontFamily: 'Tillilium',
        fontSize: 20,
        height:30
    },
    item:{
        borderColor:'blue',
        borderRadius:20
    }
})

export default Item;