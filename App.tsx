import React from "react";

import {
  View,
  StyleSheet,
  Text,
} from "react-native";




import { Dashboard } from "./src/pages/Dashboard";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export default function App() {
  return (     

    <View style={styles.container}>
      <Dashboard/>
    </View> 

      
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});
