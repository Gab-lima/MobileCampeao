import React, { useState } from "react";
import { 
  View, 
  StyleSheet, 
  TouchableOpacity,
  Text
  } from "react-native";

    import {
    TitleP24,
    Flex,
    Mb28,
    ButtonText,
    TitleP16,
    InputSimple,
    TitleP14,
    TitleP20,
    TextRotate
  } from "../styles/styles";

  import ModalComponent from "../components/Modal";
  import { Header } from "../components/Header";
  import { CardPrincipal } from "../components/CardPrincipal";
import { redA700 } from "react-native-paper/lib/typescript/styles/colors";

export default function Financeiro() {
  const [openedModal, setOpenedModal] = useState(false);

  return (
    <View style={styles.container}>
      <Header name="Gustavo" />
      <TitleP24 color="#3E3B5B">FINANCEIRO</TitleP24>

      <Flex>
        <CardPrincipal
          backGround="#025579"
          small="Saldo disponível"
          text="R$ 10.000,00"
        />
        <CardPrincipal
          backGround="#FD7C6D"
          small="Saldo pendente"
          text="R$ 10.000,00"
        />
      </Flex>

      <Mb28 />

      <TouchableOpacity
      onPress={() => setOpenedModal(true)}>
      <TitleP20 fontWeight="500" textAlign="right" color="#3E3B5B">
          EFETUAR SAQUE
        </TitleP20>
      </TouchableOpacity>

      <ModalComponent opened={openedModal} onClose={(opened: boolean) => setOpenedModal(opened)}>

        <TitleP24 fontWeght="400" textAlign="center" color="#3E3B5B">
          Realizar saque
        </TitleP24>
        <TitleP16 style={{marginBottom: 10}} textAlign="center" color="#3E3B5B">
          Valor do saque
        </TitleP16>
        <InputSimple />
        <TitleP14  textAlign="left">Valor do saque</TitleP14>

        <TitleP16 fontWeght="400" textAlign="left" color="#3E3B5B">
          Seus dados
        </TitleP16>
        <TitleP16 fontWeght="400" textAlign="left" color="#3E3B5B">
          Titular/Razão Social: Gustavo Henrique da silva
        </TitleP16>
        <TitleP16 fontWeght="400" textAlign="left" color="#3E3B5B">
          CPF/CNPJ: 00.000.000/0000-00
        </TitleP16>
        <TitleP16 fontWeght="400" textAlign="left" color="#3E3B5B">
          Banco: 0237 - Bradesco
        </TitleP16>
        <TitleP16 fontWeght="400" textAlign="left" color="#3E3B5B">
          Agência: 0001
        </TitleP16>
        <TitleP16 fontWeght="400" textAlign="left" color="#3E3B5B">
          C/C: 00000-0
        </TitleP16>

        <Mb28 />

        <ButtonText
          title="Para essa solicitação será cobrada a tarifa de saque de R$2,50"
          color="#EE1D23"
        />

        <TitleP16 style={styles.cardRed} textAlign="center" color="#FFF">
        Para essa solicitação será cobrada a tarifa de saque de R$2,50
        </TitleP16>
        <Mb28 />

        <TouchableOpacity style={styles.buttonConfirm}
      onPress={() => setOpenedModal(false)}>
      <TitleP20 fontWeight="500" textAlign="center" color="#FFF">
          CONFIRMAR SAQUE
        </TitleP20>
      </TouchableOpacity>

        <ButtonText opened={openedModal} onClose={(opened: boolean) => setOpenedModal(opened)} title="CONFIRMAR SAQUE" color="#025579" />
      </ModalComponent>

      <Mb28 />

      <TitleP24 color="#3E3B5B">EXTRATO</TitleP24>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  textX:{
    color: '#000',
    left: 160,
  },
  buttonConfirm:{
    backgroundColor:'#025579',
    borderRadius: 6,
    padding: 10,
  },
  cardRed:{
    backgroundColor:'#EE1D23',
    borderRadius: 6,
    padding: 10,
  }
});
