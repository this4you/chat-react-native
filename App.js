import React from 'react';
import {HomePage} from "./src/pages";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from "react-native";
import {MessagesPage} from "./src/pages";

const Stack = createStackNavigator();
const App = () => (
    <NavigationContainer>
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Home" component={HomePage}/>
            <Stack.Screen name="Message" component={MessagesPage}/>
        </Stack.Navigator>
    </NavigationContainer>
);
export default App;
