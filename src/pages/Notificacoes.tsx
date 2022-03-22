import React from "react";
import { View, StyleSheet } from "react-native";

import { Header } from "../components/Header";

import { TitleP24, TitleP16, FlexNoSpace, Mb28 } from "../styles/styles";

import { RadioButton } from "react-native-paper";

export default function Financeiro() {
  const [checked, setChecked] = React.useState("first");

  return (
    <View style={styles.container}>
      <Header name="Gustavo" />
      <TitleP24 color="#3E3B5B">NOTIFICAÇÃO</TitleP24>
      <TitleP16 style={{marginBottom: 25}} color="#3E3B5B">Permitir notificação</TitleP16>


      <FlexNoSpace style={{marginBottom: 25}}>
      <RadioButton
        value="first"
        status={checked === "first" ? "checked" : "unchecked"}
        onPress={() => setChecked("first")}
        color={"#025579"}
        uncheckedColor={"#025579"}
       />
        <TitleP16 color="#3E3B5B">OPÇÃO 1</TitleP16>
      </FlexNoSpace>

      <FlexNoSpace style={{marginBottom: 25}}>
      <RadioButton
        value="second"
        status={checked === "second" ? "checked" : "unchecked"}
        onPress={() => setChecked("second")}
        color={"#025579"}
        uncheckedColor={"#025579"}
      />
        <TitleP16 color="#3E3B5B">OPÇÃO 2</TitleP16>
        </FlexNoSpace>

        <FlexNoSpace style={{marginBottom: 25}}>
      <RadioButton
        value="third"
        status={checked === "third" ? "checked" : "unchecked"}
        onPress={() => setChecked("third")}
        color={"#025579"}
        uncheckedColor={"#025579"}
      />
        <TitleP16 color="#3E3B5B">OPÇÃO 3</TitleP16>
        </FlexNoSpace>


        <FlexNoSpace style={{marginBottom: 25}}>
      <RadioButton
        value="fourth"
        status={checked === "fourth" ? "checked" : "unchecked"}
        onPress={() => setChecked("fourth")}
        color={"#025579"}
        uncheckedColor={"#025579"}
      />
        <TitleP16 color="#3E3B5B">OPÇÃO 4</TitleP16>
        </FlexNoSpace>

        <FlexNoSpace>
      <RadioButton
        value="fifth"
        status={checked === "fifth" ? "checked" : "unchecked"}
        onPress={() => setChecked("fifth")}
        color={"#025579"}
        uncheckedColor={"#025579"}
      />
        <TitleP16 color="#3E3B5B">OPÇÃO 5</TitleP16>
        </FlexNoSpace>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    Flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});
