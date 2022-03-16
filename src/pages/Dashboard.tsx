import React from "react";
import {
  View,
  Image,
  StyleSheet,
 
} from "react-native";

import {Picker} from '@react-native-picker/picker';


import { Header } from "../components/Header";
import { CardPrincipal } from "../components/CardPrincipal";

import { TitleP12, TitleP24, Flex, Mb28,  } from "../styles/styles"




export default function Dashboard() {
 
  return (
    <View style={styles.container}>
    <View>
      <Header name="Gustavo"/>
      <TitleP24 color="#3E3B5B">DASHBOARD</TitleP24>

      <Flex >
      <CardPrincipal backGround="#025579" small="Saldo disponível" text="R$ 10.000,00"/>
      <CardPrincipal backGround="#FD7C6D" small="Saldo pendente" text="R$ 10.000,00"/>
      </Flex>

      <Mb28/>

      <TitleP24 color="#3E3B5B">Vendas realizadas</TitleP24>

      <View>
      <TitleP12 fontWeight="400" color="#3E3B5B" textAlign="left">Ultimos 7  dias</TitleP12>
      <TitleP24 fontWeight="400" color="#3E3B5B" textAlign="left">R$ 20.000,00</TitleP24>
      </View>
   

    {/* <Picker>
      <Picker.Item label="Java"  />
      <Picker.Item label="JavaScript"/>
    </Picker> */}

<Image source={require('../assets/img/img-grafico.png')} />

<TitleP24 color="#3E3B5B">Status de boleto</TitleP24>

<Flex>
      <CardPrincipal backGround="#025579" small="Emitidos hoje (2)" text="R$ 10.000,00"/>
      <CardPrincipal backGround="#FD7C6D" small="Compensados hoje (1)" text="R$ 10.000,00"/>
      </Flex>

    </View>
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

