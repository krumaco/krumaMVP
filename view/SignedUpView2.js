import React, { Component } from 'react';
import {  StyleSheet, ScrollView, View, WebView, Text, Dimensions, Button, TouchableOpacity, Image, TextInput } from 'react-native';
import { Item, Input } from 'native-base';
import { NavigationActions } from 'react-navigation';
import Hyperlink from 'react-native-hyperlink'

import styles from '../styles/stylesheet'

export default class SignedUpView2 extends Component {

  static navigationOptions = {
    title: 'Home',
    header: null
  };

  componentDidMount() {

  }

  render() {
    return (

        <View style={styles.walkthroughContainer}>
          <View style={styles.navHeader}>
            <View style={styles.navBackButtonContainer}>
              <TouchableOpacity onPress={() => {
                this.props.navigation.dispatch(NavigationActions.back('Walkthrough1'))

               }} style={styles.navBackButton}>
                <Image source={require('../images/arrow.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView style={{paddingBottom:20}}>
            <View style={styles.signupContent}>
              <Text style={[styles.signupTitleText, {marginTop:30}]}>Great, how do we reach you?</Text>
              <Text style={[styles.signupPlaceholderText, {marginTop:30}]} >EMAIL ADDRESS</Text>
              <Item>
                <Input keyboardType={'email-address'} onChangeText={(text) => this.setState({text}) }/>
              </Item>

              <Text style={[styles.signupPlaceholderText, {marginTop:50}]}>COUNTRY</Text>
              <Item>
                <Input onChangeText={(text) => this.setState({text}) }/>
              </Item>

              <Text style={[styles.signupPlaceholderText, {marginTop:50}] }>PHONE NUMBER</Text>
              <Item>
                <Input keyboardType = { "phone-pad" } onChangeText={(text) => this.setState({text}) }/>
              </Item>

              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('SignedUpView3');
              }} style={styles.singupButton}>
                <View >
                  <Text style={styles.singupButtonText}>SIGN UP</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Hyperlink style={{ alignItems: 'center', margin:30}}
            linkStyle={ { color: '#673ba0' } }
            linkText={ url => url === 'https://termsandcondition' ? 'Terms and Conditions' : 'Privacy Policy' }
            onPress={ url =>  {} } >
              <Text style={ {  textAlign:'center' } }>
              By clicking Sign Up, you agree to our https://termsandcondition and that you have read our https://privacypolicy
              </Text>
            </Hyperlink>

          </ScrollView>
        </View>

// By clicking Sign Up, you agree to our Terms and
// Conditions and that you have read our Privacy Policy

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
