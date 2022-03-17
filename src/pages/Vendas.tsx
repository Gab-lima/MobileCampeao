import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  Modal,
  Text
} from "react-native";

import { Header } from "../components/Header";
import { CardPrincipal } from "../components/CardPrincipal";
import ModalComponent from "../components/Modal";





import { TitleP24, TitleP14, Flex, Mb28, InputStyleFilter, FlexComponent, ButtonText, TitleP16, InputSimple} from "../styles/styles"
import { CardTransacoes } from '../components/CardTransacoes';




export default function Vendas() {

  const [openedModal, setOpenedModal] = useState(false);



 
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
            <ButtonText  color="#FD7C6D" title="Abrir" onPress={() => setOpenedModal(true)}/>
      </FlexComponent>


      <ModalComponent  opened={openedModal} onClose={(opened: boolean) => setOpenedModal(opened)}>
      
      <Mb28 />

      <TitleP16 style={{marginBottom: 7}} textAlign="left" color="#3E3B5B">Período</TitleP16>
        <InputSimple style={{marginBottom: 15}}/>

        <TitleP16 style={{marginBottom: 7}} textAlign="left" color="#3E3B5B">Tipo</TitleP16>
        <InputSimple style={{marginBottom: 15}}/>

        <TitleP16 style={{marginBottom: 7}} textAlign="left" color="#3E3B5B">Produto</TitleP16>
        <InputSimple style={{marginBottom: 15}}/>

        <TitleP16 style={{marginBottom: 7}} textAlign="left" color="#3E3B5B">Ofertas</TitleP16>
        <InputSimple style={{marginBottom: 15}}/>

        <TitleP16 style={{marginBottom: 7}} fontWeight="600" textAlign="left" color="#3E3B5B">Método de pagamento</TitleP16>

        


    </ModalComponent>


    <CardTransacoes title="PAGO" backGround="#025579"/>
    <CardTransacoes title="PENDENTE" backGround="#FD7C6D"/>
    <CardTransacoes title="PAGO" backGround="#025579"/>
    <CardTransacoes title="PENDENTE" backGround="#FD7C6D"/>
    <CardTransacoes title="PAGO" backGround="#025579"/>
    <CardTransacoes title="PENDENTE" backGround="#FD7C6D"/>

      
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



