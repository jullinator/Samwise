/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './view/App'



/*
- Added Code Push, with the option of check each time app is resumed from background.

- Will later wrap the Menu component in a App component from view-folder, that contains:
 * Loading
 * Home
 * Menu

- Also have to install Firebase, and add a listener.
* Firebase store should be a new project called pbl-code,
which all fututre cases will use as a database.
-

*/
AppRegistry.registerComponent('Samwise', ()=> App );

/*codePush({
  checkFrequency:codePush.CheckFrequency.ON_APP_RESUME
})(App)
*/

// Just for Reference of styling later on
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
