import React from 'react';
import {Login} from "./src/components";
import {HomePage} from "./src/pages";
import {
    NativeRouter,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-native";
const App = () => (
  <HomePage/>
  //   <NativeRouter>
  //       <Route path="/" exact component={Login} />
  //       <Route path="/home" exact component={HomePage}/>
  //   </NativeRouter>
);
export default App;
