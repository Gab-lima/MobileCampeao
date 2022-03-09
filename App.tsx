import React from "react";

import {
  View,
  StyleSheet, 
} from "react-native";




import { Financeiro } from "./src/pages/Financeiro";

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export default function App() {
  return (     

    <View style={styles.container}>
      {/* <Dashboard/> */}
      <Financeiro/>
    </View> 

      
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});
