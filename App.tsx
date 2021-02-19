import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  const [data, setData] = useState([]);
  fetch("https://balldontlie.io/api/v1/games?start_date=2021-02-17&end_date=2021-02-17")
  .then(response => response.json())
  .then(res => setData(res));

  let fstTeam : string = data["data"][0]["home_team"]["full_name"];
  let scdTeam : string = data["data"][0]["visitor_team"]["full_name"];
  
  return (
    <View style={styles.container}>
      <Text>Hi Kaled!</Text>
      <Image source={{uri : "https://reactnative.dev/docs/assets/p_cat1.png"}}
      style = {{width : 200, height : 200}}/>
      <Text>The next match of the day will be : {fstTeam} VS {scdTeam}</Text>
      <Text>The choc of titans!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
