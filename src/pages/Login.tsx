import React, { useState } from "react";
import { 
  View, 
  StyleSheet, 
  Image,
  } from "react-native";
import InputIcon from "../components/InputIcon";
import { Flex, FlexCenterTop, InputSimple } from "../styles/styles";

  

export default function Login() {

  return (
    <View style={styles.container}>
        <FlexCenterTop>
            <Image source={require('../assets/img/IconLogin.png')} />
        </FlexCenterTop>

        <InputIcon/>

        

      
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
