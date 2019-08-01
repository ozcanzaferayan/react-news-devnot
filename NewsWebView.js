import React from 'react';
import { WebView } from 'react-native-webview';

const NewsWebView = ({ navigation }) => {

  const url = navigation.state.params && navigation.state.params.url;
  return (
      <WebView source={{ uri: url }} />
  );
};

NewsWebView.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params && navigation.state.params.title
});

export default NewsWebView;