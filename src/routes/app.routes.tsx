import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

// import { Entypo, Feather } from '@expo/vector-icons';


import Dashboard from '../pages/Dashboard';
import Financeiro from '../pages/Financeiro';
import Vendas from '../pages/Vendas';
import Notificacoes from '../pages/Notificacoes';
import Login from '../pages/Login';
import { Image } from 'react-native';


export function AppRoutes(){
    return (
        <Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#FD7C6D',
            tabBarInactiveTintColor: '#CADFFF',  
            tabBarStyle: {
                height: 84,
                backgroundColor: '#025579',
                paddingBottom: 20,
                paddingTop: 20,
            }
        }}
        >
            <Screen 
            name="Dashboard"
            component={Dashboard}
            // options={{
            //     tabBarIcon: ({ size, color}) => (
            //         <Image source={require('../assets/img/IconLogin.png')} />
            //     )
            // }}
            />
            <Screen 
            name="Financeiro"
            component={Financeiro}
            />
            <Screen 
            name="Vendas"
            component={Vendas}
            />
            <Screen 
            name="Notificação"
            component={Notificacoes}
            />
            <Screen 
            name="Sair"
            component={Login}
            />
        </Navigator>
    )
}