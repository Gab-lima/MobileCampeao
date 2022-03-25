import React from "react";

import { ButtonText } from "../styles/styles"

interface ButtonProps{
    title: string;
    
  }

export function ButtonStyle(props:  ButtonProps) {
 
  return (

         <ButtonText  title={props.title}/>

  );
}

