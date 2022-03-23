import React from "react";
import { 
   Image, TextInput,
  } from "react-native";
import { Flex, InputIconStyle } from "../styles/styles";

interface InputIconProps{
    title?: string;
    
    
  }


export default function InputIcon(props: InputIconProps) {

  return (
    
        <Flex>
        <Image source={require('../assets/img/email.png')} />
        <InputIconStyle placeholder="testef" />
        </Flex>

  );
}

