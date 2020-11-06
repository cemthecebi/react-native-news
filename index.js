/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Headlines from './components/HeadLines';
import NewsWebView from './components/NewsWebView';
import App from './App';
import {name as appName} from './app.json';

const MainNavigator = createStackNavigator({
  Home: {screen: App},
  Headlines: {screen: Headlines},
  NewsWebView: {screen: NewsWebView},
});

const MainContainer = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => MainContainer);
