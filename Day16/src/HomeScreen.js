// @flow

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import type Route from './types/Route';

type Props = {
  navigateTo: (newRoute: Route) => void,
};

type State = {currScreen: Route, favorites: Array<string>};

export default class HomeScreen extends Component<Props, State> {
  state = {
    currScreen: 'HOME',
    favorites: [],
  };

  render() {
    let {navigateTo} = this.props;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigateTo('SEARCH')}
          title="Search Image"
          color="#841584"
          accessibilityLabel="Search images from imgur"
        />
        <Button
          onPress={() => navigateTo('FAVORITE')}
          title="Favorites"
          color="#841584"
          accessibilityLabel="Favorite images from imgur"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 70,
  },
});
