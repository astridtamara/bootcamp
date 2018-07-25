// @flow

import React from 'react';
import {View, StyleSheet} from 'react-native';
type FavProp = {
  link: string,
  favorites: Array<string>,
};

export default function DisplayFavCircle(props: FavProp) {
  let {link, favorites} = props;
  if (favorites.indexOf(link) !== -1) {
    return <View style={styles.favCircle} />;
  }
  return null;
}

const styles = StyleSheet.create({
  favCircle: {
    width: 12,
    height: 12,
    borderRadius: 8,
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#fcdf3c',
  },
});
