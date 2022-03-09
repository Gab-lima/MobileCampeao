import React from "react";

import {
  View,
  StyleSheet, 
} from "react-native";

import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from "./src/routes/app.routes"; 



export default function App() {
  return (     

    
      <NavigationContainer>
      <AppRoutes />
      </NavigationContainer>
      
   

      
  )

}

