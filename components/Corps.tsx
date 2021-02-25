import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Item from "./Item";
interface MatchDate {
  fstTeam: string;
  scdTeam: string;
}
const getData = async () => {
  return fetch(
    "https://balldontlie.io/api/v1/games?start_date=2021-02-23&end_date=2021-02-23"
  )
    .then((response) => response.json())
    .then((responseJSON: Object) => {
      return responseJSON;
    })
    .catch((error) => {
      console.error(error);
    });
};
const getFormatData = async () => {
  let newData: Array<MatchDate> = [];
  let data = await getData();
  console.log(data["data"]);
  return data["data"].map((match) => {
    return {
      fstTeam: match["home_team"]["full_name"],
      scdTeam: match["visitor_team"]["full_name"].toString(),
    };
  });
};
/*
let matchs = [
  {
    fstTeam: "Boston",
    scdTeam: "Cleveland",
  },
  {
    fstTeam: "Celtics",
    scdTeam: "Warriors",
  },
  {
    fstTeam: "Clippers",
    scdTeam: "Hornets",
  },
  {
    fstTeam: "6ters",
    scdTeam: "Bulls",
  },
  {
    fstTeam: "Knicks",
    scdTeam: "Utah",
  },
  {
    fstTeam: "Boston",
    scdTeam: "Cleveland",
  },
  {
    fstTeam: "Celtics",
    scdTeam: "Warriors",
  },
  {
    fstTeam: "Clippers",
    scdTeam: "Hornets",
  },
  {
    fstTeam: "6ters",
    scdTeam: "Bulls",
  },
  {
    fstTeam: "Knicks",
    scdTeam: "Utah",
  },
  {
    fstTeam: "Boston",
    scdTeam: "Cleveland",
  },
  {
    fstTeam: "Celtics",
    scdTeam: "Warriors",
  },
  {
    fstTeam: "Clippers",
    scdTeam: "Hornets",
  },
  {
    fstTeam: "6ters",
    scdTeam: "Bulls",
  },
  {
    fstTeam: "Knicks",
    scdTeam: "Utah",
  },
];*/
const Corps = () => {
  let [matchs, setMatchs] = useState([]);
  React.useEffect(() => {
    getFormatData().then((data) => {
      setMatchs(data);
    });
  }, []);
  return (
    <View style={corpsStyle.view}>
      <FlatList
        data={matchs}
        renderItem={({ item }) => (
          <Item fstTeam={item.fstTeam} scdTeam={item.scdTeam} />
        )}
      />
    </View>
  );
};
const corpsStyle = StyleSheet.create({
  view: {
    flex: 1,
  },
});
export default Corps;