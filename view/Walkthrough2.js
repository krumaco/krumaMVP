import React, { Component } from 'react';

import { StyleSheet, View, WebView, Text, Dimensions, Button, TouchableOpacity } from 'react-native';

import LottieView from 'lottie-react-native';
import LottieAnimation from 'easy-lottie-react-native';
import styles from '../styles/stylesheet'

export default class Walkthrough2 extends Component {

  static navigationOptions = {
    title: 'Home',
    header: null
  };

  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    //this.animation.play(30, 120);

    // <Animation
    //   ref={animation => { this.animation = animation; }}
    //   style={{ width: 300, height: 300, backgroundColor:'red' }}
    //   source={require('../animation/logo/data.json')}
    //   imageAssetsFolder={'../animation/logo/images'}
    // />
  }
  // <WebView source={require('../animation/logo/demo.html')} scrollEnabled={false} style={styles.content} />
  // <View style={styles.content}>
  // </View>

// <WebView source={require('../animation/world_travel/demo.html')} scrollEnabled={false} style={styles.content} />

  render() {
    return (

        <View style={styles.walkthroughContainer}>

          <View style={styles.walkthroughHeader}>
            <View style={styles.walkthrougButtonContainer}>
              <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('SignedUpView1');
               }} style={styles.walkthrougSkipButton}>
                  <Text style={{color:'#4a4a4a', textAlign:'center'}}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.walkthrougContent}>
            <LottieView ref={animation => { this.animation = animation; }} style={styles.walkthrougAnimation}
              source={require('../animation/world_travel/cubos.json')} loop/>

            <Text style={styles.walkthrougTitleText}>True Exchange Rate</Text>
            <Text style={styles.walkthrougMessageText}>Use the True Exchange Rate and avoid those expensive fees at the airport, banks and forex bureaus.</Text>

            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Walkthrough3');
             }} style={styles.walkthrougButton}>
              <View >
                <Text style={styles.walkthrougButtonText}>TELL ME MORE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        // <LottieAnimation source={require('../animation/exchange/data.json')} style={styles.walkthrougAnimation}
        // imageAssetsFolder='lottie/Exchange/images' enableMergePathsAndroidForKitKatAndAbove/>

      // <ScrollView horizontal style={styles.content}>
      //   <View style={styles.content}>
      //     <WebView source={require('../animation/logo/demo.html')} scrollEnabled={false} style={styles.content} />
      //   </View>
      //   <View style={styles.content}>
      //     <WebView source={require('../animation/logo/demo.html')} scrollEnabled={false} style={styles.content} />
      //   </View>
      // </ScrollView>
    );
  }
}
