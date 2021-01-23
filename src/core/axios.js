import axios from 'axios';
import SyncStorage from "sync-storage";
console.log("Test");
import AsyncStorage from "@react-native-community/async-storage";
axios.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers["token"] = token;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    });
axios.defaults.baseURL = "http://192.168.0.105:3003";
axios.defaults.headers.common["token"] = SyncStorage.get("token") || "";
export default axios;
