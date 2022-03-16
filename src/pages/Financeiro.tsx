import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text
} from "react-native";

import { Header } from "../components/Header";
import { CardPrincipal } from "../components/CardPrincipal";
import { ButtonStyle } from "../components/Button";

import { TitleP24, Flex, Mb28, ButtonText, TitleP12, InputSimple, TitleP14 } from "../styles/styles"




export default function Financeiro() {

  const [count, setCount] = useState(false);
 
  return (
    <View style={styles.container}>
      <Header name="Gustavo"/>
      <TitleP24 color="#3E3B5B">FINANCEIRO</TitleP24>

      <Flex>
      <CardPrincipal backGround="#025579" small="Saldo disponível" text="R$ 10.000,00"/>
      <CardPrincipal backGround="#FD7C6D" small="Saldo pendente" text="R$ 10.000,00"/>
      </Flex>

      <Mb28/>

      <ButtonText color="#025579" title="EFETUAR SQUE" onPress={() => setCount(true)}/>

      <Modal
        transparent={true}
        visible={count}
        >
      <View style={{backgroundColor:"#000000aa", flex: 1}}>
        <View style={{backgroundColor:"#FFF", margin:50, padding:40, borderRadius:10, flex: 1}} >
      <ButtonText color="#FD7C6D" title="Fechar" onPress={() => setCount(false)}/>
      <TitleP24 textAlign="center" color="#3E3B5B">Realizar saque</TitleP24>
      <TitleP12 textAlign="center" color="#3E3B5B">Valor do saque</TitleP12>
      <InputSimple />
      <TitleP14 textAlign="left" >Valor do saque</TitleP14>

      <TitleP12 textAlign="left" color="#3E3B5B">Seus dados</TitleP12>
      <TitleP12 textAlign="left" color="#3E3B5B">Titular/Razão Social: Gustavo Henrique da silva</TitleP12>
      <TitleP12 textAlign="left" color="#3E3B5B">CPF/CNPJ: 00.000.000/0000-00</TitleP12>
      <TitleP12 textAlign="left" color="#3E3B5B">Banco: 0237 - Bradesco</TitleP12>
      <TitleP12 textAlign="left" color="#3E3B5B">Agência: 0001</TitleP12>
      <TitleP12 textAlign="left" color="#3E3B5B">C/C: 00000-0</TitleP12>

      <Mb28/>

      <ButtonText title="Para essa solicitação será cobrada a tarifa de saque de R$2,50" color="#EE1D23"/>
      <Mb28/>
      
      <ButtonText title="CONFIRMAR SAQUE" color="#025579"/>




        </View>
      </View>
    </Modal>
      
      <Mb28/>

      

      <TitleP24 color="#3E3B5B">EXTRATO</TitleP24>


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



