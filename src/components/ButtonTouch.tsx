import React from "react";
import { TouchableOpacityStyle, TitleP16 } from "../styles/styles";

interface ButtonTouchProps{
  title: string;
  backGround?: string;
  
}

export function ButtonClose(props: ButtonTouchProps) {
 
  return (
          <TouchableOpacityStyle backGround={props.backGround}>
            <TitleP16 fontWeight="400" color="#FFF" textAlign="center">{props.title}</TitleP16>
          </TouchableOpacityStyle>
  );
}

