import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { ButtonClose } from "../components/ButtonTouch";
import InputIconSenha from "../components/InputPassword";
import { FlexCenterTop, Mb28, TitleP14, FlexNoSpace, InputIconStyle } from "../styles/styles";

export default function Login() {
  return (
    <View style={styles.container}>
      <FlexCenterTop>
        <Image source={require("../assets/img/IconLogin.png")} />
      </FlexCenterTop>

    

      <FlexNoSpace style={{backgroundColor: 'white', paddingLeft: 10, borderRadius: 4}}>
         <Image source={require("../assets/img/email.png")} />
        <InputIconStyle  placeholder='E-mail' placeholderTextColor="#B7B6C4" />
        <Image source={require("../assets/img/spaceInput.png")} />
        </FlexNoSpace>
  


      <Mb28 />

      
        <InputIconSenha placeholder="Senha" />
      

      <TitleP14 fontWeigth="400" textAlign="right" color="#3E3B5B">
        Esqueceu a senha
      </TitleP14>

      <Mb28 />
      <ButtonClose backGround="#025579" title="ACESSAR" />
    

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
