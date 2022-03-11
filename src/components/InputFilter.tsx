import React from "react";
import {
  View,
  Image,
  TextInput,
} from "react-native";


interface HeaderProps{
    placeholder: string;
  }


export function InputFilter(props:  HeaderProps) {
 
  return (
    <TextInput placeholder={props.placeholder}/>
  );
}

