// @flow

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Font} from 'expo';
import OpenSans from './assets/fonts/OpenSans-Regular.ttf';

type State = {
  fontLoaded: boolean,
  start: number,
  currTime: number,
  isStart: boolean,
  laps: Array<string>,
};
type Prop = {};

const INTERVAL = 60;

export default class App extends Component<Prop, State> {
  state = {
    fontLoaded: false,
    start: 0,
    currTime: 0,
    isStart: false,
    laps: [],
  };
  _timeout: ?TimeoutID = null;
  _scroll = null;

  componentDidMount() {
    Font.loadAsync({
      'open-sans-regular': OpenSans,
    }).then((res) => {
      this.setState({fontLoaded: true});
    });
  }

  render() {
    if (this.state.fontLoaded) {
      let {start, currTime, isStart, laps} = this.state;
      let timeElapsed = this._calculateTime(start, currTime);
      return (
        <View style={styles.container}>
          <Text style={styles.header}>Stopwatch</Text>
          <Text style={styles.timer}>{timeElapsed}</Text>
          <View style={styles.btnWrapper}>
            <TouchableOpacity onPress={this._onLapPress} style={styles.btnLap}>
              <Text style={styles.btnText}>LAP</Text>
            </TouchableOpacity>
            {!isStart ? (
              <TouchableOpacity onPress={this._start} style={styles.btnStart}>
                <Text style={styles.btnText}>START</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={this._stop} style={styles.btnStop}>
                <Text style={styles.btnText}>STOP</Text>
              </TouchableOpacity>
            )}
          </View>
          <ScrollView
            style={styles.lapList}
            ref={(scroll) => {
              this._scroll = scroll;
            }}
            onContentSizeChange={() => {
              if (this._scroll) {
                this._scroll.scrollToEnd({animated: false});
              }
            }}
          >
            {laps.map((lap, index) => {
              return (
                <View style={styles.lapRows} key={index}>
                  <Text style={styles.lapText}>Lap {index + 1}</Text>
                  <Text style={styles.lapText}>{lap}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={{color: '#fff'}}>Loading ...</Text>
        </View>
      );
    }
  }

  _calculateTime(start: number, currTime: number) {
    let timeElapsed = (currTime - start) / 1000;
    let minutes = Math.floor(timeElapsed / 60).toString(10);
    return (
      this._leftPadZero(minutes, 2) +
      ':' +
      this._leftPadZero(timeElapsed.toFixed(2), 5)
    );
  }

  _leftPadZero(num: string, length: number) {
    return num.length < length ? '0' + num : num;
  }

  _start = () => {
    let now = Date.now();
    this.setState({start: now, currTime: now, isStart: true, laps: []}, () => {
      this._timeout = setTimeout(this._updateTime, INTERVAL);
    });
  };

  _updateTime = () => {
    this.setState({currTime: Date.now()}, () => {
      this._timeout = setTimeout(this._updateTime, INTERVAL);
    });
  };

  _stop = () => {
    this.setState({isStart: false}, () => {
      if (this._timeout != null) {
        clearTimeout(this._timeout);
      }
    });
  };

  _onLapPress = () => {
    let {laps, start, currTime, isStart} = this.state;
    if (isStart) {
      let newLap = this._calculateTime(start, currTime);
      this.setState({laps: [...laps, newLap]});
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  header: {
    marginTop: 50,
    fontSize: 20,
    color: '#fff',
    flexGrow: 1,
    fontFamily: 'open-sans-regular',
  },
  timer: {
    fontSize: 80,
    color: '#fff',
    flexGrow: 1,
    fontFamily: 'open-sans-regular',
  },
  btnWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: '100%',
    justifyContent: 'space-between',
    padding: 8,
  },
  lapList: {
    display: 'flex',
    flexGrow: 2,
    width: '100%',
  },
  lapRows: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    alignSelf: 'flex-start',
    width: '100%',
    justifyContent: 'space-between',
    padding: 8,
  },
  lapText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'open-sans-regular',
  },
  btnStart: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: 'transparent',
    opacity: 0.85,
    borderWidth: 0,
    backgroundColor: '#26c16f',
  },
  btnStop: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ed4634',
    opacity: 0.85,
    borderColor: 'transparent',
    borderWidth: 0,
  },
  btnLap: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#afbacc',
    opacity: 0.85,
    borderColor: 'transparent',
    borderWidth: 0,
  },
  btnText: {
    position: 'absolute',
    top: '42%',
    textAlign: 'center',
    width: '100%',
    color: '#fff',
    fontFamily: 'open-sans-regular',
  },
});
