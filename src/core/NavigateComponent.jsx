import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import {MessagesPage, HomePage, CreateDialogPage} from "../pages";
import {connect} from 'react-redux';
import {Login, Register} from '../components';

const Stack = createStackNavigator();
const NavigateComponent = ({isAuth}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                {isAuth ? (
                    <>
                        <Stack.Screen name="Home" component={HomePage}/>
                        <Stack.Screen name="Message" component={MessagesPage}/>
                        <Stack.Screen name="CreateDialogPage" component={CreateDialogPage}/>
                    </>
                ) : (
                    <>
                        <Stack.Screen name="SignIn" component={Login}/>
                        <Stack.Screen name="SignUp" component={Register}/>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default connect(({users}) => ({isAuth: users.isAuth}))(NavigateComponent);
