import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import {MessagesPage, HomePage} from "../pages";
import {connect} from 'react-redux';
import {Login} from '../components';
const Stack = createStackNavigator();
const NavigateComponent = ({isAuth}) => {
    //isAuth = true; // TODO: вернуть после верстки
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                {isAuth ? (
                    <>
                        <Stack.Screen name="Home" component={HomePage}/>
                        <Stack.Screen name="Message" component={MessagesPage}/>
                    </>
                ) : (
                    <Stack.Screen name="SignIn" component={Login} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default connect(({ users }) => ({ isAuth: users.isAuth }))(NavigateComponent);
