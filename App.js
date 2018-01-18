/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component } from 'react';

 import { StackNavigator } from 'react-navigation';

 import SplashView from './view/SplashView'
 import Walkthrough1 from './view/Walkthrough1'
 import Walkthrough2 from './view/Walkthrough2'
 import Walkthrough3 from './view/Walkthrough3'
 import SignedUpView1 from './view/SignedUpView1'
 import SignedUpView2 from './view/SignedUpView2'
 import SignedUpView3 from './view/SignedUpView3'

 // const instructions = Platform.select({
 //   ios: 'Press Cmd+R to reload,\n' +
 //     'Cmd+D or shake for dev menu',
 //   android: 'Double tap R on your keyboard to reload,\n' +
 //     'Shake or press menu button for dev menu',
 // });

 const Navigation = StackNavigator({
   Splash: { screen: SplashView },
   Walkthrough1: { screen: Walkthrough1 },
   Walkthrough2: { screen: Walkthrough2 },
   Walkthrough3: { screen: Walkthrough3 },
   SignedUpView1: { screen: SignedUpView1 },
   SignedUpView2: { screen: SignedUpView2 },
   SignedUpView3: { screen: SignedUpView3 },
 });

 export default Navigation;

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
