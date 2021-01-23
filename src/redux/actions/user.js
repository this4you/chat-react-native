import {userApi} from "../../utils/api";
import SyncStorage from 'sync-storage';
import {Alert} from "react-native";
// import AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';

const Actions = {
    setUserData: data => ({
        type: 'USER:SET_DATA',
        payload: data,
    }),
    setIsAuth: bool => ({
        type: 'USER:SET_IS_AUTH',
        payload: bool,
    }),

    fetchUserData: () => dispatch => {
        userApi
            .getMe()
            .then(({data}) => {
                dispatch(Actions.setUserData(data));
            })
            .catch(err => {
                if (err.response.status === 403) {
                    dispatch(Actions.setIsAuth(false));
                    delete window.localStorage.token;
                }
            });
    },
    fetchUserLogin: postData => dispatch => {
        return userApi
            .signIn(postData)
            .then(({data}) => {
                const {status, token} = data;
                if (status === "error") {
                    Alert.alert("Неправильный email или пароль");
                } else {
                    AsyncStorage.setItem("token", token).then(() => {
                        dispatch(Actions.setIsAuth(true));
                    });
                }
                return data;
            })
            .catch(({response}) => {
                Alert.alert("Ошибка сервиса авторизации");
            });
    },
    fetchUserRegister: postData => () => {
        return userApi.signUp(postData);
    },
};

export default Actions;
