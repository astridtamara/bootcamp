// @flow

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import DisplayFavCircle from './DisplayFavCircle';

type Props = {
  navigateTo: (newRoute: Route) => void,
  setFavorite: (link: string) => void,
  favorites: Array<string>,
};

type State = {value: string, links: Array<string>};

export default class SearchScreen extends Component<Props, State> {
  state = {
    value: 'apple',
    links: [],
  };

  async _fetchImage() {
    let url = `https://api.imgur.com/3/gallery/search/?q=${this.state.value}`;
    let result = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Client-ID 24b9bf1b56a95f7',
      },
    });
    let res = await result.json();
    let {data} = res;

    let arrLinks = [];
    data.forEach(({link, is_album}) => {
      if (!is_album) {
        arrLinks.push(link);
      }
    });
    this.setState({links: arrLinks});
  }

  componentDidMount() {
    this._fetchImage();
  }

  _onInputChange = (newText: string) => {
    this.setState({value: newText});
  };

  render() {
    let {navigateTo, setFavorite, favorites} = this.props;
    let {value, links} = this.state;
    let count = links.length;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigateTo('HOME')}
          title="Go Back"
          color="#841584"
          style={styles.btnBorder}
          accessibilityLabel="Back to Home"
        />
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={this._onInputChange}
        />
        <Button
          onPress={() => this._fetchImage()}
          title="Search"
          color="#4286f4"
          style={styles.btnBorder}
          accessibilityLabel="Search"
        />
        <Text style={styles.textBody}>
          {value || 'Please input some text.'}
        </Text>
        <Text style={styles.textBody}>{count || '0'}</Text>
        <ScrollView>
          {links.map((link, index) => {
            return (
              <View style={styles.imageContainer} key={index}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    setFavorite(link);
                    this.setState({});
                  }}
                >
                  <Image style={styles.imgStyle} source={{uri: link}} />
                </TouchableOpacity>
                <DisplayFavCircle link={link} favorites={favorites} />
              </View>
            );
          })}
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
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 4,
    height: 22,
    width: 200,
  },
  textBody: {
    paddingHorizontal: 4,
    color: '#96125a',
  },
  btnBorder: {
    borderWidth: 1,
    borderColor: '#4f5e77',
  },
  imageContainer: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
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
