import {axios} from '../../core/'
//import AsyncStorage from '@react-native-community/async-storage';

export default {
    signIn: postData => axios.post("/user/signin", postData),
    signUp: postData => axios.post("/user/signup", postData),
    verifyHash: hash => axios.get("/user/verify?hash=" + hash),
    getMe: () => axios.get("/user/me"),
    findUsers: query => axios.get("/user/find?query=" + query)
}
