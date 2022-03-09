import React, { useState, useEffect } from "react";
import {
  View,
  Image,
} from "react-native";

import { TitleP12, FlexComponent } from "../styles/styles"

interface HeaderProps{
    name: string;
  }


export function Header(props:  HeaderProps) {
 
  return (
    <FlexComponent>

     <Image source={require('../assets/img/logo-header.png')} />

     <View>
         <TitleP12 fontWeight="500" color="#3E3B5B" textAlign="right">Olá {props.name},</TitleP12>
         <TitleP12 fontWeight="400" color="#3E3B5B" textAlign="right">gustavo@plataformacampeao.com</TitleP12>
     </View>


    </FlexComponent>
  );
}

