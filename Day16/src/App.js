// @flow

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView
} from "react-native";

type Props = {};

type State = { value: string, links: Array<string>, favorites: Array<string> };

export default class App extends Component<Props, State> {
  state = {
    value: "apple",
    links: [],
    favorites: []
  };

  async _fetchImage() {
    let url = `https://api.imgur.com/3/gallery/search/?q=${this.state.value}`;
    let result = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Client-ID 24b9bf1b56a95f7"
      }
    });
    let res = await result.json();
    let { data } = res;

    let arrLinks = [];
    data.forEach(({ link, is_album, images }) => {
      if (!is_album) {
        arrLinks.push(link);
      }
    });
    this.setState({ links: arrLinks });
  }

  componentDidMount() {
    this._fetchImage();
  }

  _onInputChange = (newText: string) => {
    this.setState({ value: newText });
    this._fetchImage();
  };

  render() {
    let { value, links } = this.state;
    let count = links.length;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={this._onInputChange}
        />
        <Text style={styles.textBody}>
          {value || "Please input some text."}
        </Text>
        <Text style={styles.textBody}>{count || "0"}</Text>
        <ScrollView>
          <View style={styles.imageContainer}>
            {links.map((link, index) => {
              return (
                <Image
                  style={styles.imgStyle}
                  key={index}
                  source={{ uri: link }}
                />
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 70
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 4,
    height: 22,
    width: 200
  },
  textBody: {
    paddingHorizontal: 4,
    color: "#F0F"
  },
  imageContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 0,
    padding: 16
  },
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000"
  }
});