import React, {useState} from "react";
import {Image, StyleSheet, View } from "react-native";

import { Flex, } from "../styles/styles"



import { Picker } from '@react-native-picker/picker';

export default function PickerComponent() {
   
    const [selectedLanguage, setSelectedLanguage] = useState();
  
    return (
        <Flex style={styles.container}>
        <Picker style={styles.picker}
        selectedValue={selectedLanguage}
        itemStyle={{ backgroundColor: "red", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Hoje" value="Hoje" />
        <Picker.Item label="Este mês" value="esseMes" />
        <Picker.Item label="Último 7 dias" value="ultimo7" />
        <Picker.Item label="Último 15 dias" value="ultimo15" />
        <Picker.Item label="Último 30 dias" value="ultimo30" />
      </Picker>
      <Image style={styles.imageStyle} source={require('../assets/img/Vector.png')} />

      </Flex>
    );
  }

  const styles = StyleSheet.create({
    picker: {
      width: 184,
      backgroundColor: 'white',
      borderRadius: 10,
      borderColor: 'black',
      color: '#3E3B5B',
      borderWidth: 2,
      padding: 0,
    },
    container: {
        borderWidth: 1, 
        borderColor: '#025579', 
        borderRadius: 4, 
        width: 200, 
        paddingLeft: 2,  
        backgroundColor: 'white', 
        paddingRight: 10,
        marginRight: 20,
      },
      imageStyle: {
         right: 15,
      },

  });
