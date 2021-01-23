import React, { useState } from 'react';
import {Button, TextInput, View, StyleSheet } from 'react-native';
import {connect} from "react-redux";
import {userActions} from "../redux/actions";

const Login = ({fetchUserLogin}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
        const postData = {email: login, password: password}
        fetchUserLogin(postData);
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={login}
                onChangeText={(login) => setLogin(login)}
                placeholder={'Username'}
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={(password) => setPassword(password)}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />

            <Button
                title={'Login'}
                style={styles.input}
                onPress={onLogin}
            />
        </View>
    );
}
export default  connect(({ users }) => ({ token: users.token }), userActions)(Login);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});
