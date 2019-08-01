import { AppRegistry, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { name as appName } from './app.json';
import App from './App';
import Headlines from './Headlines';
import NewsWebView from './NewsWebView';

const navigationConfig = {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Haber Kategorileri',
    headerStyle: {
      backgroundColor: '#2196F3',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
    },
  },
}

StatusBar.setBarStyle('light-content', true);

const MainNavigator = createStackNavigator({
  Home: { screen: App },
  Headlines: { screen: Headlines },
  NewsWebView: { screen: NewsWebView },
}, navigationConfig);

const MainContainer = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => MainContainer);

