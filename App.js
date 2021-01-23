import React from 'react';
import {Provider} from 'react-redux';
import NavigateComponent from './src/core/NavigateComponent';

import store from './src/redux/store';

const App = () => (
    <Provider store={store}>
        <NavigateComponent/>
    </Provider>
);
export default App;
