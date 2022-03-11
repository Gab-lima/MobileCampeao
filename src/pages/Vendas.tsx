import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  Modal,
  Text
} from "react-native";

import { Header } from "../components/Header";
import { CardPrincipal } from "../components/CardPrincipal";

import { TitleP24, Flex, Mb28, InputStyleFilter, FlexComponent, ButtonText} from "../styles/styles"

export default function Financeiro() {

  const [count, setCount] = useState(false);
 
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

      <FlexComponent>
            <InputStyleFilter placeholder="teste" />
            <ButtonText color="#FD7C6D" title="Abrir" onPress={() => setCount(true)}/>
      </FlexComponent>


       <Modal
        transparent={true}
        visible={count}
        >
      <View style={{backgroundColor:"#000000aa", flex: 1}}>
        <View style={{backgroundColor:"#FFF", margin:50, padding:40, borderRadius:10, flex: 1}} >
      <Text style={{color:"#000"}}> Aqui vai o conteúdo</Text>
      <ButtonText color="#FD7C6D" title="Fechar" onPress={() => setCount(false)}/>

        </View>
      </View>
    </Modal>

      
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



