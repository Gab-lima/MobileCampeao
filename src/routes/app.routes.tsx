import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();


import Dashboard from '../pages/Dashboard';
import Financeiro from '../pages/Financeiro';


export function AppRoutes(){
    return (
        <Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#FD7C6D',
            tabBarInactiveTintColor: '#CADFFF',  
            tabBarStyle: {
                height: 84,
                backgroundColor: '#025579'
            }
        }}
        >
            <Screen 
            name="Dashboard"
            component={Dashboard}
            // options={{
            //     tabBarIcon: (({ size, color}) =>
                
            //     )
            // }}
            />
            <Screen 
            name="Financeiro"
            component={Financeiro}
            />
            <Screen 
            name="Vendas"
            component={Financeiro}
            />
            <Screen 
            name="Notificação"
            component={Financeiro}
            />
            <Screen 
            name="Sair"
            component={Financeiro}
            />
        </Navigator>
    )
}