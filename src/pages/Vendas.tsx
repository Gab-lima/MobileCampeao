import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

import { Header } from "../components/Header";
import { CardPrincipal } from "../components/CardPrincipal";
import { ButtonStyle } from "../components/Button";

import { TitleP24, Flex, Mb28, } from "../styles/styles"




export default function Financeiro() {
 
  return (
    <View style={styles.container}>
      <Header name="Gustavo"/>
      <TitleP24 color="#3E3B5B">VENDAS</TitleP24>

      <Flex>
      <CardPrincipal backGround="#025579" small="Transações efetuadas" text="200"/>
      <CardPrincipal backGround="#FD7C6D" small="Receita gerada" text="R$ 10.000,00"/>
      </Flex>

      <Mb28/>

      <TitleP24 color="#3E3B5B">Transações</TitleP24>


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



