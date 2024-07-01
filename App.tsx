/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import type {PropsWithChildren} from 'react';
import codePush from 'react-native-code-push';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Routes from './src/Routes';
import {
  ActivityIndicator,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './src/reducers/rootReducer';
import _ from 'lodash';
import LocalStorage from './src/LocalStorage';
import {changeLanguage} from './src/messages';
import colors from './src/colors';

const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
    accent: colors.accent,

  },
};

const store = configureStore({
  reducer: rootReducer,
  // Potentially other middleware or enhancers
});


class App extends Component<PropsWithChildren, any> {
  constructor(props: PropsWithChildren, context: any) {
    super(props, context);
    this.state = {localState: null};
  }

  render() {
    if (_.isNil(this.state.localState)) {
      LocalStorage.getLocalState()
        .then(localState => {
          if (
            !_.isNil(localState.languageSelected) &&
            !_.isEmpty(localState.languageSelected)
          ) {
            changeLanguage(localState.languageSelected);
            this.setState({localState: localState});
          }
        })
        .catch(_error => this.setState({localState: null}));
      return <ActivityIndicator />;
    }

    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            {Routes(this.state.localState)}
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    );
  }
}

let app = __DEV__ ? App : codePush(App);
export default app;
// export {default} from './storybook';
