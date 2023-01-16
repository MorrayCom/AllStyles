import 'react-native-gesture-handler';
// import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import List from './List';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UI from './UI';
import UI0 from './UI0';


const tab  = createBottomTabNavigator();


export default function App(){
    return(
         <NavigationContainer>
             <tab.Navigator>
               <tab.Screen name='Home' component={UI0}/>
               <tab.Screen name='Fashion' component={UI}/>
               {/* <tab.Screen name='List' component={List}/> */}
             </tab.Navigator>
         </NavigationContainer>
    )
}
