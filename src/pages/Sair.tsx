import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
} from "react-native";

import {  Mb28, ButtonText,} from "../styles/styles"




export default function Financeiro() {

  const [count, setCount] = useState(false);
 
  return (
    <>
      

      <ButtonText color="#025579" title="EFETUAR SQUE" onPress={() => setCount(true)}/>

      <Modal
        transparent={true}
        visible={count}
        >
      <View style={{backgroundColor:"#000000aa", flex: 1}}>
        <View style={{backgroundColor:"#FFF", margin:50, padding:40, borderRadius:10, flex: 1}} >
      <ButtonText color="#FD7C6D" title="Fechar" onPress={() => setCount(false)}/>
      
      <ButtonText title="Para essa solicitação será cobrada a tarifa de saque de R$2,50" color="#EE1D23"/>
      <Mb28/>

        </View>
      </View>
    </Modal>
      
      <Mb28/>
      </>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});



