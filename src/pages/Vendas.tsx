import React, { useState } from "react";

import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import { Header } from "../components/Header";
import { CardPrincipal } from "../components/CardPrincipal";
import ModalComponent from "../components/Modal";

import {
  TitleP24,
  Flex,
  Mb28,
  InputStyleFilter,
  FlexComponent,
  ButtonText,
  TitleP16,
  InputSimple,
  Mb12,
  FlexInput,
  FlexNoSpace,
  InputIconStyleFilter,
} from "../styles/styles";
import { CardTransacoes } from "../components/CardTransacoes";
import FlexSelectComplete from "../components/Select";

export default function Vendas() {
  const [openedModal, setOpenedModal] = useState(false);

  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
      <Header name="Gustavo" />
      <TitleP24 color="#3E3B5B">VENDAS</TitleP24>
      <Mb12 />

      <Flex>
        <CardPrincipal
          backGround="#025579"
          small="Transações efetuadas"
          text="200"
        />
        <CardPrincipal
          backGround="#FD7C6D"
          small="Receita gerada"
          text="R$ 10.000,00"
        />
      </Flex>

      <Mb28 />

      <TitleP24 color="#3E3B5B">Transações</TitleP24>
      <Mb12 />

      <FlexComponent>
      <FlexNoSpace style={{backgroundColor: 'white', paddingLeft: 10, borderRadius: 4}}>
         <Image source={require("../assets/img/lupa.png")} />
        <InputIconStyleFilter  placeholder='Search Here....' placeholderTextColor="#B7B6C4" />
        </FlexNoSpace>
        <TouchableOpacity
          style={styles.buttonFilter}
          onPress={() => setOpenedModal(true)}
        >
            <Image source={require("../assets/img/iconFilter.png")} />
        </TouchableOpacity>
        <ButtonText color="#FD7C6D" title="Abrir" />
      </FlexComponent>

      <ModalComponent
        opened={openedModal}
        onClose={(opened: boolean) => setOpenedModal(opened)}
      >
        <Mb28 />

        <TitleP16 style={{ marginBottom: 7 }} textAlign="left" color="#3E3B5B">
          Período
        </TitleP16>
        <FlexSelectComplete />
        <Mb12 />

        <TitleP16 style={{ marginBottom: 7 }} textAlign="left" color="#3E3B5B">
          Tipo
        </TitleP16>
        <InputSimple style={{ marginBottom: 15 }} />

        <TitleP16 style={{ marginBottom: 7 }} textAlign="left" color="#3E3B5B">
          Produto
        </TitleP16>
        <InputSimple style={{ marginBottom: 15 }} />

        <TitleP16 style={{ marginBottom: 7 }} textAlign="left" color="#3E3B5B">
          Ofertas
        </TitleP16>
        <InputSimple style={{ marginBottom: 15 }} />

        <TitleP16
          style={{ marginBottom: 7 }}
          fontWeight="600"
          textAlign="left"
          color="#3E3B5B"
        >
          Método de pagamento
        </TitleP16>
      </ModalComponent>

      <ScrollView>
        <CardTransacoes title="PAGO" backGround="#025579" />
        <CardTransacoes title="PENDENTE" backGround="#FD7C6D" />
        <CardTransacoes title="PAGO" backGround="#025579" />
        <CardTransacoes title="PENDENTE" backGround="#FD7C6D" />
        <CardTransacoes title="PAGO" backGround="#025579" />
        <CardTransacoes title="PENDENTE" backGround="#FD7C6D" />
        <CardTransacoes title="PAGO" backGround="#025579" />
        <CardTransacoes title="PENDENTE" backGround="#FD7C6D" />
        <CardTransacoes title="PAGO" backGround="#025579" />
        <CardTransacoes title="PENDENTE" backGround="#FD7C6D" />
        <CardTransacoes title="PAGO" backGround="#025579" />
        <CardTransacoes title="PENDENTE" backGround="#FD7C6D" />
        <CardTransacoes title="PAGO" backGround="#025579" />
        <CardTransacoes title="PENDENTE" backGround="#FD7C6D" />
        <CardTransacoes title="PAGO" backGround="#025579" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  buttonFilter: {
    backgroundColor: "#FD7C6D",
    padding: 13,
    borderRadius: 6,
  },
});
