import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity
} from "react-native";

import { ButtonText,TextRotate} from "../styles/styles"


interface modalProps{
  children: React.ReactNode;
  opened: boolean;
  onClose: (opened: boolean) => void;
}

export default function ModalComponent(props: modalProps) {

 
  return (
    <View>

      <Modal 
        transparent={true}
        visible={props.opened}
        >
      <View style={{backgroundColor:"#000000aa", flex: 1}}>
        <View style={{backgroundColor:"#FFF", margin:50, paddingHorizontal:40, borderRadius:10, }} >

        <TouchableOpacity 
        onPress={() => props.onClose(false)}>          
        <TextRotate style={styles.textX}>+</TextRotate>
       </TouchableOpacity>      
        {props.children}

        </View>
      </View>
    </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  textX:{
    color: '#000',
    left: 160,
  }
});



