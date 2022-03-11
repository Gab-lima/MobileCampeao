import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";


import { TitleP24,} from "../styles/styles"




export default function Modal() {
 
  return (
      <View>
    <View style={styles.teste}>
      <TitleP24 color="#3E3B5B">FINANCEIRO</TitleP24>


    </View>
      </View>
  );
}


const styles = StyleSheet.create({
  teste: {
    flex: 1,
    backgroundColor: '#000000aa',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});



