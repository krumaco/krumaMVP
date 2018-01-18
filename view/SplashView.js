import React, { Component } from 'react';
import { StyleSheet, View, WebView, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import TimerMixin from 'react-timer-mixin';
import LottieAnimation from 'easy-lottie-react-native';

import Walkthrough1 from '../view/Walkthrough1'

import styles from '../styles/stylesheet'

export default class SplashView extends Component {

  static navigationOptions = {
    header: null
  };

  componentDidMount()
  {
    // const resetAction = NavigationActions.reset({
    //   index: 0,
    //   actions: [
    //     NavigationActions.navigate({ routeName: 'Walkthrough1'})
    //   ]
    // })
    // this.props.navigation.dispatch(resetAction)

      setTimeout(() => {

          console.log('I do not leak!');
          const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Walkthrough1'})
            ]
          })
          this.props.navigation.dispatch(resetAction)

    }, 7500);
  }

  render() {
    return (

      <View style={styles.splashContent}>
        <LottieAnimation source={require('../animation/logo/data.json')} style={styles.animation}
         enableMergePathsAndroidForKitKatAndAbove/>
      </View>
    );
  }
}

// imageAssetsFolder='lottie/Logo/images'
/*
SF UI Display
SFUIDisplay-Regular
SFUIDisplay-Bold
SFUIDisplay-Thin
SFUIDisplay-Medium
SFUIDisplay-Heavy
SFUIDisplay-Ultralight
SFUIDisplay-Semibold
SFUIDisplay-Light
SFUIDisplay-Black
*/
