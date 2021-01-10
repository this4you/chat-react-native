import React, { Component, useState } from 'react';
import axios from 'axios';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

const Login = ({history}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
        axios.post("http://192.168.0.111:3003/user/signin", {
            email: login,
            password: password
        })
            .then(({data}) => {
                const {status, token} = data;
                Alert.alert('Token: ' + token);
                history.push('/home');
            })
            .catch(err => {
                    Alert.alert('Error');
            })
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
export default Login;


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
