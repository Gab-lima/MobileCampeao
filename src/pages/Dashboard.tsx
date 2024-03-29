import React from "react";
import {
  View,
  Image,
  StyleSheet,
 
} from "react-native";


import { Header } from "../components/Header";
import { CardPrincipal } from "../components/CardPrincipal";

import { TitleP16, TitleP24, Flex, Mb28, FlexNoSpace, TitleP12, Mb12 } from "../styles/styles"
import PickerComponent from "../components/SelectMiddle";




export default function Dashboard() {
 
  return (
    <View style={styles.container}>
    
      <Header name="Gustavo"/>
      <TitleP24 color="#3E3B5B">DASHBOARD</TitleP24>
      <Mb12/>


      <Flex >
      <CardPrincipal backGround="#025579" small="Saldo disponível" text="R$ 10.000,00"/>
      <CardPrincipal backGround="#FD7C6D" small="Saldo pendente" text="R$ 10.000,00"/>
      </Flex>

      <Mb28/>

      <TitleP24 color="#3E3B5B">Vendas realizadas</TitleP24>
      <Mb12/>


      <FlexNoSpace>
        <View style={{width: 220}}>
        <PickerComponent />
        </View>
      <View>
      <TitleP16 fontWeight="400" color="#3E3B5B" textAlign="left">Ultimos 7  dias</TitleP16>
      <TitleP24 fontWeight="400" color="#3E3B5B" textAlign="left">R$ 20.000,00</TitleP24>
      </View>
      </FlexNoSpace>
      
   

    

<Image source={require('../assets/img/img-grafico.png')} />

<TitleP24 color="#3E3B5B">Status de boleto</TitleP24>
<Mb12/>


<Flex>
      <CardPrincipal backGround="#025579" small="Emitidos hoje (2)" text="R$ 10.000,00">
      <TitleP16 style={{margin: 0}} color="#FFF">Status de boleto</TitleP16>
 </CardPrincipal>
      <CardPrincipal backGround="#FD7C6D" small="Compensados hoje (1)" text="R$ 10.000,00"/>
      </Flex>

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

