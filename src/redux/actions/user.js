import {userApi} from "../../utils/api";
import {message} from "antd";

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
                    message.error("Неправильный email или пароль");
                } else {
                    localStorage.token = token;
                    window.axios.defaults.headers.common['token'] = token;
                    window.localStorage['token'] = token;
                    dispatch(Actions.fetchUserData());
                    dispatch(Actions.setIsAuth(true));
                }
                return data;
            })
            .catch(({response}) => {
                message.error("Неправильный email или пароль");
            });
    },
    fetchUserRegister: postData => () => {
        return userApi.signUp(postData);
    },
};

export default Actions;