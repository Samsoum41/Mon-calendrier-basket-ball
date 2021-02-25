import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const EnTete =  () => {
    let [fontsLoaded] = useFonts({'Tillilium' : require('../font/Titillium_Web/TitilliumWeb-Regular.ttf')});
    if (!fontsLoaded){
        return <AppLoading/>
    }
    else{
        return(
            <View style = {headStyle.viewContainer}>
                <Image source={require('../logo-nba.png')}
                       style = {headStyle.logo} />
                <View style={{flexDirection:'row', justifyContent:'flex-end', flex:0.75, alignContent: 'center'}}>
                    <Text style={headStyle.date}>{new Date().toLocaleDateString('en-GB')}</Text>
                </View>
            </View>
        )
    }
}

const headStyle = StyleSheet.create({
    viewContainer :{
        flexDirection: 'row',
        height:100,
        paddingLeft: 30,
        marginTop: 50,
        backgroundColor:'blue'
    },

    logo :{
        height : 100
    },

    date: {
        fontFamily: 'Tillilium',
        fontSize: 30,
        color:'red',
        textAlignVertical: 'center'
    }
})
export default EnTete;