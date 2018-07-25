// @flow

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import type Route from './types/Route';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import FavoriteScreen from './FavoriteScreen';

type Props = {};

type State = {currScreen: Route};

export default class App extends Component<Props, State> {
  state = {
    currScreen: 'HOME',
  };
  favorites: Array<string> = [];

  render() {
    let {currScreen} = this.state;
    if (currScreen === 'HOME') {
      return <HomeScreen navigateTo={this._navigateTo} />;
    } else if (currScreen === 'SEARCH') {
      return (
        <SearchScreen
          navigateTo={this._navigateTo}
          setFavorite={this._setFavorite}
          favorites={this.favorites}
        />
      );
    } else if (currScreen === 'FAVORITE') {
      return (
        <FavoriteScreen
          navigateTo={this._navigateTo}
          setFavorite={this._setFavorite}
          favorites={this.favorites}
        />
      );
    }
  }

  _navigateTo = (newRoute: Route) => {
    this.setState({currScreen: newRoute});
  };

  _setFavorite = (link: string) => {
    let idx = this.favorites.indexOf(link);
    if (idx === -1) {
      this.favorites.push(link);
    } else {
      this.favorites.splice(idx, 1);
    }
  };
}
