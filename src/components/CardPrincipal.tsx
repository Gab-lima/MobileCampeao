import React, { Children } from "react";

import { TitleP16, FlexComponent, TitleP24, CardPrincipalStyle } from "../styles/styles"

interface HeaderProps{
    small: string;
    text: string;
    backGround?: string;
    children?: React.ReactNode;
  }


export function CardPrincipal(props:  HeaderProps) {
 
  return (
    
     <CardPrincipalStyle backGround={props.backGround} >
         <TitleP16 fontWeight="400" color="#FFF" textAlign="center">{props.small}</TitleP16> 
         <TitleP24 fontWeight="700" color="#FFF" textAlign="center">{props.text}</TitleP24>
         {props.children}
     </CardPrincipalStyle>


  );
}

