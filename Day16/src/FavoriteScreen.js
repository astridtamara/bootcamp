// @flow

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import DisplayFavCircle from './DisplayFavCircle';

type Props = {
  navigateTo: (newRoute: Route) => void,
  setFavorite: (link: string) => void,
  favorites: Array<string>,
};

type State = {};

export default class SearchScreen extends Component<Props, State> {
  state = {};

  render() {
    let {favorites, navigateTo, setFavorite} = this.props;
    let favCount = favorites.length;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigateTo('HOME')}
          title="Go Back"
          color="#841584"
          accessibilityLabel="Back to Home"
        />
        <Text style={styles.textBody}>{favCount || '0'}</Text>
        <ScrollView>
          <View style={styles.imageContainer}>
            {favorites.map((link, index) => {
              return (
                <View style={styles.imageContainer} key={index}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setFavorite(link)}
                  >
                    <Image style={styles.imgStyle} source={{uri: link}} />
                  </TouchableOpacity>
                  <DisplayFavCircle link={link} favorites={favorites} />
                </View>
              );
            })}
          </View>
        </ScrollView>
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
  imageContainer: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: 4,
  },
  imgStyle: {
    width: 150,
    height: 100,
    padding: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4f5e77',
  },
});
