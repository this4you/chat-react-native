import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {connect} from "react-redux";
import {userActions} from "../redux/actions";
import styled from "styled-components/native/dist/styled-components.native.esm";

const Login = ({fetchUserLogin, navigation}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
        const postData = {email: login, password: password}
        fetchUserLogin(postData);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <LoginHeader>Авторизуватися</LoginHeader>
                <LoginPlaceholderHeader>Будь ласка, авторизуйтесь</LoginPlaceholderHeader>
                <InputArea>
                    <TextInput
                        value={login}
                        onChangeText={(login) => setLogin(login)}
                        placeholder={'Email'}
                        style={styles.input}
                    />
                    <TextInput
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        placeholder={'Пароль'}
                        secureTextEntry={true}
                        style={styles.input}
                    />
                    <SingInButton
                        title={'Ввійти в акаунт'}
                        //color="#9C27B0"
                        //background-color="#9C27B0"
                        //style={styles.loginScreenButton}
                        onPress={onLogin}
                    >
                        <SingInButtonText>Ввійти в акаунт</SingInButtonText>
                    </SingInButton>
                    <SingUpButton
                        onPress={() => navigation.navigate("SignUp")}>
                        <SingUpButtonText>Зареєструватися</SingUpButtonText>
                    </SingUpButton>
                </InputArea>
            </View>
        </TouchableWithoutFeedback>
    );
}
export default connect(({users}) => ({token: users.token}), userActions)(Login);


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
    loginScreenButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#1E6738',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
});

const LoginHeader = styled.Text`
    font-weight: 500;
    font-size: 20px;
`;

const LoginPlaceholderHeader = styled.Text`
    font-weight: 200;
    font-size: 18px;
    margin-bottom: 30px;
`;

const InputArea = styled.View`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 30%;
`;

const SingInButton = styled.TouchableOpacity`
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #40a9ff;
    width: 200px
    height: 40px
`;

const SingInButtonText = styled.Text`
    color: white;
    font-size: 18px;
`;

const SingUpButton = styled.TouchableOpacity`
    
`;

const SingUpButtonText = styled.Text`
    color:#ADADAD;
    margin-top: 5px;
    font-size: 15px;
`;

