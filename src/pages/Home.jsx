import React, {useEffect} from 'react';
import {Dialogs} from "../containers/";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Text, View } from 'react-native';
import {connect} from "react-redux";
import {userActions} from "../redux/actions";
import socket from "../core/socket";

function Settings() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

const Home = ({fetchUserData, currentUserId, navigation}) => {

    useEffect(() => {
        fetchUserData();
    }, []);

    useEffect(() => {
        if (currentUserId) {
            console.log("start join");
            socket.emit('join', currentUserId.toString());
        }
    }, [currentUserId]);

    return (
        <Tab.Navigator
            initialRouteName="Chats"
            tabBarOptions={{
                activeTintColor: '#418fff',
            }}
        >
            <Tab.Screen
                name="Chats"
                component={Dialogs}
                options={{
                    tabBarLabel: 'Чати',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chat" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Налаштування',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default  connect(({ users }) => ({ currentUserId: users.data && users.data._id }), userActions)(Home);
