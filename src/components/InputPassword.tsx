import React, {useState} from "react";
import { 
    Button,
   Image,
   TouchableOpacity
  } from "react-native";
import { FlexInput, InputIconStyle } from "../styles/styles";

import { TextInput } from 'react-native-paper';

interface InputIconProps{
    title?: string;
    placeholder?: string;
    children?: React.ReactNode;
    imgUri?: any;
  }


export default function InputIconSenha(props: InputIconProps) {

    const [text, setText] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);

  return (
        <FlexInput style={{backgroundColor: "white", paddingHorizontal: 10, borderRadius: 4}}>
        <Image source={require("../assets/img/iconKey.png")} />
        <InputIconStyle style={{paddingLeft: 10}} placeholder={props.placeholder}
        secureTextEntry={passwordVisible}
        placeholderTextColor="#B7B6C4" />
        <TouchableOpacity activeOpacity={0.5}
        onPress={() => setPasswordVisible(!passwordVisible)}>
        <Image source={require("../assets/img/eye.png")} />
    
            </TouchableOpacity>
        </FlexInput>
        
  );
}

<Image source={require("../assets/img/iconKey.png")}  />
