import React from "react";

import { ButtonText } from "../styles/styles"

interface ButtonProps{
    title: string;
    color?: string;
    
  }

export function ButtonStyle(props:  ButtonProps) {
 
  return (

         <ButtonText  color={props.color} title={props.title}/>

  );
}

