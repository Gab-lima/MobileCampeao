import React, { useState } from "react";
import { 
  View, 
  StyleSheet, 
  } from "react-native";

    import {
    TitleP24,
    Flex,
    Mb28,
    ButtonText,
    TitleP16,
    InputSimple,
    TitleP14,
  } from "../styles/styles";

  import ModalComponent from "../components/Modal";
  import { Header } from "../components/Header";
  import { CardPrincipal } from "../components/CardPrincipal";
import PickerComponent from "../components/Select";

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

      <ButtonText
        color="#025579"
        title="EFETUAR SQUE"
        onPress={() => setOpenedModal(true)}
      />

      <ModalComponent opened={openedModal} onClose={(opened: boolean) => setOpenedModal(opened)}>
        
        <TitleP24 textAlign="center" color="#3E3B5B">
          Realizar saque
        </TitleP24>
        <TitleP16 textAlign="center" color="#3E3B5B">
          Valor do saque
        </TitleP16>
        <InputSimple />
        <TitleP14 textAlign="left">Valor do saque</TitleP14>

        <TitleP16 textAlign="left" color="#3E3B5B">
          Seus dados
        </TitleP16>
        <TitleP16 textAlign="left" color="#3E3B5B">
          Titular/Razão Social: Gustavo Henrique da silva
        </TitleP16>
        <TitleP16 textAlign="left" color="#3E3B5B">
          CPF/CNPJ: 00.000.000/0000-00
        </TitleP16>
        <TitleP16 textAlign="left" color="#3E3B5B">
          Banco: 0237 - Bradesco
        </TitleP16>
        <TitleP16 textAlign="left" color="#3E3B5B">
          Agência: 0001
        </TitleP16>
        <TitleP16 textAlign="left" color="#3E3B5B">
          C/C: 00000-0
        </TitleP16>

        <Mb28 />

        <ButtonText
          title="Para essa solicitação será cobrada a tarifa de saque de R$2,50"
          color="#EE1D23"
        />
        <Mb28 />

        <ButtonText title="CONFIRMAR SAQUE" color="#025579" />
      </ModalComponent>

      <Mb28 />

      <TitleP24 color="#3E3B5B">EXTRATO</TitleP24>

    <PickerComponent/>


     

      
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
});
