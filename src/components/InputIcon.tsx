import React from "react";
import { 
   Image,
  } from "react-native";
import { FlexInput, InputIconStyle } from "../styles/styles";

interface InputIconProps{
    title?: string;
    placeholder?: string;
    children?: React.ReactNode;
  }


export default function InputIcon(props: InputIconProps) {

  return (
        <FlexInput>
        {props.children}
        <InputIconStyle  placeholder={props.placeholder} placeholderTextColor="#B7B6C4" />
        </FlexInput>
        
  );
}

