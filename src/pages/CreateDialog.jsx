import React, {useEffect, useRef, useState} from 'react';
import {connect} from "react-redux";
import {messagesActions} from "../redux/actions";
import styled from "styled-components/native";
import {Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View} from "react-native";

const CreateDialog = ({navigation, setMessages}) => {
    const [login, setLogin] = useState("");
    const [text, setText] = useState("");
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <Container>
                <HeaderContainer>
                    <Header>Створення діалогу</Header>
                </HeaderContainer>
                <View style={styles.container}>
                    <InputArea>
                        <TextInput
                            value={login}
                            onChangeText={(login) => setLogin(login)}
                            placeholder={"Ім'я користувача"}
                            style={styles.input}
                        />
                        <TextInput
                            value={text}
                            onChangeText={(text) => setText(text)}
                            placeholder={'Текст повідомлення'}
                            secureTextEntry={true}
                            style={styles.input}
                        />
                        <CreateDialogButton>
                            <CreateDialogButtonText>Створити</CreateDialogButtonText>
                        </CreateDialogButton>
                    </InputArea>
                </View>
            </Container>
        </TouchableWithoutFeedback>
    );
}
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
    }
});
const Header = styled.Text`
    font-weight: 800;
    font-size: 20px;
`;
const HeaderContainer = styled.View`
    justify-content: center;
    align-items: center;
`;
const Container = styled.View`
   flex: 1;
   margin-top: 50px;
`;
const CreateDialogButton = styled.TouchableOpacity`
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #40a9ff;
    width: 200px
    height: 40px
`;

const CreateDialogButtonText = styled.Text`
    color: white;
    font-size: 18px;
`;

const InputArea = styled.View`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 30%;
`;

export default connect(({dialogs}) => ({currentDialogId: dialogs.currentDialogId}), messagesActions)(CreateDialog);
