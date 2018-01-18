import React, { Component } from 'react';
import {  StyleSheet, ScrollView, View, WebView, Text, Dimensions, Button, TouchableOpacity, TouchableWithoutFeedback, Image, TextInput } from 'react-native';
import { Item, Input } from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from '../styles/stylesheet'

export default class SignedUpView1 extends Component {

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
              <Text style={[styles.signupTitleText, {marginTop:30}]}>Let’s get to know you</Text>
              <Text style={[styles.signupPlaceholderText, {marginTop:30}]}>FIRST NAME</Text>
              <Item>
                <Input onChangeText={(text) => this.setState({text}) }/>
              </Item>

              <Text style={[styles.signupPlaceholderText, {marginTop:50}]}>LAST NAME</Text>
              <Item>
                <Input onChangeText={(text) => this.setState({text}) }/>
              </Item>

              <Text style={[styles.signupPlaceholderText, {marginTop:50}]}>BIRTHDAY</Text>
              <Item>
                <Input onChangeText={(text) => this.setState({text}) }/>
              </Item>

              <TouchableOpacity  onPress={() => {
                this.props.navigation.navigate('SignedUpView2');
              }} >
                <View style={styles.singupButton}>
                  <Text style={styles.singupButtonText}>NEXT</Text>
                </View>
              </TouchableOpacity>

                <TouchableOpacity style={{alignItems: 'center', marginTop:30, marginBottom:30 }} onPress={() => {
                }} >

                    <View style={{flexDirection:"row"}}>
                      <Text>Already signed up? </Text><Text style={{color:'#673ba0'}}>Check Your Status</Text>
                    </View>
                </TouchableOpacity>

            </View>
          </ScrollView>
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
