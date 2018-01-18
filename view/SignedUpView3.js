import React, { Component } from 'react';
import {  StyleSheet, ScrollView, View, WebView, Text, Dimensions, Button, TouchableOpacity, TouchableWithoutFeedback, Image, TextInput } from 'react-native';
import { Item, Input } from 'native-base';
import { NavigationActions } from 'react-navigation';

import styles from '../styles/stylesheet'

export default class SignedUpView3 extends Component {

  static navigationOptions = {
    title: 'Home',
    header: null
  };

  componentDidMount() {

  }

  render() {
    return (

        <View style={styles.walkthroughContainer}>

            <View style={[styles.signupContent, { flex: 1, flexDirection: 'column', justifyContent: 'space-between',} ]}>

              <Text style={[styles.signupTitleText, {marginTop:80, textAlign:'center'}]}>Kruma will be launching soon.</Text>
              <Text style={[styles.signupMessageText, {marginTop:20}]}>You’ve been added to our mailing list.</Text>

              <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={require('../images/mail.png')} />
              </View>

              <TouchableOpacity style={styles.singupButton} onPress={() => {
              }} >
                <View >
                  <Text style={styles.singupButtonText}>INVITE FRIENDS</Text>
                </View>
              </TouchableOpacity>

              <View style={{justifyContent: 'center', alignItems:'center', marginBottom:30}}>
                <Text style={{ marginTop:30, marginBottom:30}}>
                  Follow us for latest updates
                </Text>

                <View style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                  <TouchableOpacity style={{marginHorizontal:20}} onPress={() => {
                  }} >
                    <Image source={require('../images/fb.png')} style={{width:30, height:30}}/>
                  </TouchableOpacity>

                  <TouchableOpacity style={{marginHorizontal:20}} onPress={() => {
                  }} >
                    <Image source={require('../images/instagram.png')} style={{width:30, height:30}}/>
                  </TouchableOpacity>

                  <TouchableOpacity style={{marginHorizontal:20}} onPress={() => {
                  }} >
                    <Image source={require('../images/twitter.png')} style={{width:30, height:30}}/>
                  </TouchableOpacity>

                  <TouchableOpacity style={{marginHorizontal:20}} onPress={() => {
                  }} >
                    <Image source={require('../images/linkedin.png')} style={{width:30, height:30}}/>
                  </TouchableOpacity>

                </View>
              </View>

            </View>
        </View>
    );
  }
}

// var width = Dimensions.get('window').width;
// var height = Dimensions.get('window').height;
//
// var styles = StyleSheet.create({
//
//     content:{
//       flex: 3,
//       justifyContent: 'center',
//       alignItems: 'center',
//       paddingLeft: 8,
//       paddingRight: 8,
//       backgroundColor:'white'
//     },
//
//     titleText: {
//       marginHorizontal:10,
//       fontFamily: "SFUIDisplay-Semibold",
//       fontSize: 30,
//       color:'black'
//     },
//
//     messageText: {
//       marginTop:20,
//       marginHorizontal:50,
//       fontFamily: "SFUIDisplay-Regular",
//       fontSize: 16,
//       textAlign:'center',
//       color:'#4a4a4a'
//     },
//
//     button: {
//       marginTop:50,
//       backgroundColor:'#673ba0',
//       paddingTop:15,
//       paddingBottom:15,
//       paddingLeft:80,
//       paddingRight:80,
//       borderRadius:30,
//       borderWidth: 1,
//       borderColor: '#fff'
//     },
//
//     buttonText: {
//       fontFamily: "SFUIDisplay-Semibold",
//       fontSize: 16,
//       textAlign:'center',
//       color:'white'
//     },
//
//     buttonContainer: {
//       alignItems: 'flex-start',
//       backgroundColor:'white'
//     },
//     backButton: {
//       flexDirection: 'row',
//       backgroundColor: 'white',
//       padding: 8,
//       width: 44,
//       height: 44,
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     // PinButton: {
//     //   flexDirection: 'row',
//     //   backgroundColor: 'red',
//     //   padding: 8,
//     //   borderRadius: 6,
//     //   justifyContent: 'space-between',
//     //   width: 60
//     // },
//
//
//
// });
