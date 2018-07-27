// @flow
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';

type Friends = {
  name: string,
  phone: string,
  pict: string,
};

type Prop = {};

type State = {
  friendList: Array<Friends>,
};

export default class App extends Component<Prop, State> {
  state = {
    friendList: [
      {
        name: 'Astrid',
        phone: '081314214045',
        pict: require('./assets/imgs/pinut.jpg'),
      },
      {
        name: 'Astrid',
        phone: '081314214045',
        pict: require('./assets/imgs/korodut.jpg'),
      },
      {
        name: 'Astrid T.',
        phone: '081314214045',
        pict: require('./assets/imgs/ciriyo.jpg'),
      },
      {
        name: 'Astrid',
        phone: '081314214045',
        pict: require('./assets/imgs/koro-che.jpg'),
      },
      {
        name: 'Astrid',
        phone: '081314214045',
        pict: require('./assets/imgs/robo.jpg'),
      },
      {
        name: 'Astrid',
        phone: '081314214045',
        pict: require('./assets/imgs/kororo.jpg'),
      },
    ],
  };

  render() {
    let {friendList} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={{marginLeft: 16}}>
            <Icon name="menu" color="#fff" />
          </TouchableOpacity>
          <Text style={{fontSize: 22, color: '#fff'}}>Le Profile</Text>
          <TouchableOpacity style={{marginRight: 16}}>
            <Icon name="settings" color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.profile}>
          <TouchableOpacity>
            <Image
              style={{width: 100, height: 100, borderRadius: 25}}
              source={require('./assets/imgs/imio.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 100,
              height: 100,
              borderWidth: 1,
              borderColor: '#71a6fc',
              borderRadius: 25,
              padding: 10,
            }}
          >
            <Text style={{fontSize: 17, color: '#71a6fc', textAlign: 'center'}}>Add Friend</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 25, color: '#71a6fc'}}>Friend List</Text>
        <ScrollView style={styles.friendList}>
          {friendList.map((friend, index) => {
            return (
              <View style={styles.friendRow} key={index}>
                <Image
                  style={{width: 75, height: 75, borderRadius: 35}}
                  source={friend.pict}
                />
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{
                      color: '#4a4a4a',
                      fontWeight: 'bold',
                      fontSize: 17,
                    }}
                  >
                    {friend.name}
                  </Text>
                  <Text
                    style={{
                      color: '#4a4a4a',
                    }}
                  >
                    {friend.phone}
                  </Text>
                </View>
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
    justifyContent: 'center',
  },
  header: {
    marginTop: 30,
    height: 50,
    width: '100%',
    backgroundColor: '#4286f4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profile: {
    width: '100%',
    padding: 16,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  friendList: {
    marginTop: 10,
    paddingHorizontal: 16,
    width: '100%',
  },
  friendRow: {
    flexDirection: 'row',
    flexGrow: 1,
    alignSelf: 'flex-start',
    width: '100%',
    padding: 10,
    marginVertical: 3,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#71a6fc',
    borderRadius: 10,
  },
});
