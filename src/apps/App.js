import React from 'react';
import {mapping} from '@eva-design/eva';
import {Provider} from 'react-redux';

import {ApplicationProvider} from 'react-native-ui-kitten';
import store from './store';
import {theme} from './constants/theme';
import HomeScreen from './scenes/Home';

const App = () => (
  <ApplicationProvider mapping={mapping} theme={theme}>
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  </ApplicationProvider>
);

export default App;
