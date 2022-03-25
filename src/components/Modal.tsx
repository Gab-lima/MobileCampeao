import React from "react";
import {
  View,
  StyleSheet,
  Modal,
} from "react-native";

import { ButtonText,} from "../styles/styles"
import { ButtonClose,} from "./ButtonTouch"



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
        <View style={{backgroundColor:"#FFF", margin:50, padding:40, borderRadius:10, flex: 1}} >
      
        <ButtonText 
          color="#FD7C6D"
          title="+"
          onPress={() => props.onClose(false)}
          
        />
        {props.children}

        </View>
      </View>
    </Modal>
    </View>
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



