import React from "react";

import { TitleP12, FlexComponent, TitleP24, CardPrincipalStyle } from "../styles/styles"

interface HeaderProps{
    small: string;
    text: string;
    backGround?: string;
  }


export function CardPrincipal(props:  HeaderProps) {
 
  return (
    
     <CardPrincipalStyle backGround={props.backGround} >
         <TitleP12 fontWeight="400" color="#FFF" textAlign="center">{props.small}</TitleP12>
         <TitleP24 fontWeight="700" color="#FFF" textAlign="center">{props.text}</TitleP24>
     </CardPrincipalStyle>


  );
}

