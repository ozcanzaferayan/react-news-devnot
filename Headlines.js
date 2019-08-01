import React, { useState, useEffect } from 'react';
import { Image, View, SafeAreaView, Text, FlatList, TouchableHighlight } from 'react-native';
import prettyTime from './PrettyTime';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Headlines = ({ navigation }) => {
  const [headlines, setHeadlines] = useState({});

  const query = navigation.state.params && navigation.state.params.category;
  const language = 'tr';
  const API_KEY = '<API_KEY>';
  const url = `https://newsapi.org/v2/everything?language=${language}&q=${query}&apiKey=${API_KEY}`;

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    (await fetch(url))
      .json()
      .then(res => setHeadlines(res))
  }

  function renderItem({ item }) {
    return (
      <TouchableHighlight onPress={() => { navigation.navigate('NewsWebView', { url: item.url, title: item.title }) }}>
        <View style={{ flex: 1, flexDirection: 'row', padding: 10, borderBottom: 1, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
          <Image style={{ width: 100, height: 100 }} source={{ uri: item.urlToImage }} />
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text style={{ flexWrap: 'wrap' }}>{item.title}</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="newspaper" size={15} style={{ paddingRight: 5 }} />
                <Text>{item.source.name}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="clock-outline" size={15} style={{ paddingRight: 5 }} />
                <Text>{prettyTime(item.publishedAt)}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>);
  }

  return (
    <SafeAreaView>
      <FlatList
        data={headlines && headlines.articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

Headlines.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params && navigation.state.params.category} Haberleri`
});

export default Headlines;
