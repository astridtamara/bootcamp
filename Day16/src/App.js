// @flow

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import type Route from './types/Route';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import FavoriteScreen from './FavoriteScreen';

type Props = {};

type State = {
  currScreen: Route,
  favorites: Array<string>,
};

export default class App extends Component<Props, State> {
  state = {
    currScreen: 'HOME',
    favorites: [],
  };

  render() {
    let {currScreen, favorites} = this.state;
    if (currScreen === 'HOME') {
      return <HomeScreen navigateTo={this._navigateTo} />;
    } else if (currScreen === 'SEARCH') {
      return (
        <SearchScreen
          navigateTo={this._navigateTo}
          setFavorite={this._setFavorite}
          favorites={favorites}
        />
      );
    } else if (currScreen === 'FAVORITE') {
      return (
        <FavoriteScreen
          navigateTo={this._navigateTo}
          setFavorite={this._setFavorite}
          favorites={favorites}
        />
      );
    }
  }

  _navigateTo = (newRoute: Route) => {
    this.setState({currScreen: newRoute});
  };

  _setFavorite = (link: string) => {
    let {favorites} = this.state;
    let idx = favorites.indexOf(link);
    if (idx === -1) {
      this.setState({favorites: [...favorites, link]});
    } else {
      let newFav = favorites.splice(idx, 1);
      this.setState({favorites: newFav});
    }
  };
}
