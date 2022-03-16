import React from "react";
import { Text, View } from "react-native";
import { CardSmall, TitleP16, TitleP12, FlexNoSpace } from "../styles/styles";
import { CardPrincipal } from "./CardPrincipal";


interface CardTransacoesProps{
    title: string;
    color?: string;
    backGround?: string;
    
  }

export function CardTransacoes(props:  CardTransacoesProps) {
 
  return (

         <FlexNoSpace>
           <CardSmall backGround={props.backGround}>
           <TitleP16 fontWeight="400" color="#FFF" textAlign="center">{props.title}</TitleP16>
           </CardSmall >

           <View >
           <TitleP12 style={{marginBottom: 10}} fontWeight="400" color="#000" textAlign="left">DATA: 00/00/0000</TitleP12>
           <TitleP12 fontWeight="400" color="#000" textAlign="left">PRODUTO: FÓRMULA DE SUCESSO</TitleP12>
           <TitleP12 fontWeight="400" color="#000" textAlign="left">CLIENTE: GUSTAVO HENRIQUE DA SILVA</TitleP12>
           </View>

           <View style={{marginLeft: 45}}>
           <TitleP12 fontWeight="400" color="#000" textAlign="right">Comissão</TitleP12>
           <TitleP16 fontWeight="400" color="#000" textAlign="left">R$ 10.000,00</TitleP16>
           
           </View>
           
         </FlexNoSpace>

  );
}

