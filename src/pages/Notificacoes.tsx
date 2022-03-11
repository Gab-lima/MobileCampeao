import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

import { Header } from "../components/Header";

import { TitleP24, Flex, Mb28, } from "../styles/styles"




export default function Financeiro() {
 
  return (
    <View style={styles.container}>
      <Header name="Gustavo"/>
      <TitleP24 color="#3E3B5B">NOTIFICAÇÃO</TitleP24>

    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});



