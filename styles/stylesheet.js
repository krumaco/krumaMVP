import { Platform, StyleSheet } from 'react-native';

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

export default StyleSheet.create({

  animation: {
    width: width,
    height: width
  },

  splashContent:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
  },

  walkthroughContainer: {
    backgroundColor:'white',
    alignSelf: 'stretch',
    flex: 1,
  },
  walkthroughHeader: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 80,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8
  },
  walkthrougAnimation: {
    width: width - 50,
    height: width - 50,
    marginTop:-100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  walkthrougContent:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor:'white'
  },
  walkthrougTitleText: {
    marginHorizontal:10,
    fontFamily: Platform.OS === 'ios' ? "SFUIDisplay-Semibold" : "sfdisplay_semibold",
    fontSize: 30,
    color:'black'
  },
  walkthrougMessageText: {
    marginTop:20,
    marginHorizontal:50,
    fontFamily: Platform.OS === 'ios' ? "SFUIDisplay-Regular" : "sfdisplay_regular",
    fontSize: 16,
    textAlign:'center',
    color:'#4a4a4a'
  },
  walkthrougButton: {
    marginTop:50,
    backgroundColor:'#673ba0',
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:80,
    paddingRight:80,
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  walkthrougButtonText: {
    fontFamily: "SFUIDisplay-Semibold",
    fontSize: 16,
    textAlign:'center',
    color:'white'
  },
  walkthrougButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor:'white'
  },
  walkthrougSkipButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 6,
    justifyContent: 'space-between',
    width: 60,
    height:60,
    alignItems: 'center',
    justifyContent: 'center',
  },


  navHeader: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ? 64 : 44,
    paddingLeft: 8,
    paddingRight: 8
  },
  navBackButtonContainer: {
    alignItems: 'flex-start',
    backgroundColor:'white'
  },
  navBackButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    width: 44,
    height: 44,
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
  singupButton: {
    marginTop:50,
    backgroundColor:'#673ba0',
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:80,
    paddingRight:80,
    borderRadius:30,
    elevation: 3
  },
  singupButtonText: {
    fontFamily: Platform.OS === 'ios' ? "SFUIDisplay-Semibold" : "sfdisplay_semibold",
    fontSize: 16,
    textAlign:'center',
    color:'white',

  },
  signupTitleText: {
    fontFamily: Platform.OS === 'ios' ? "SFUIDisplay-Heavy" : "sfdisplay_heavy",
    fontSize: 20,
    color:'black'
  },
  signupMessageText: {
    marginTop:20,
    fontFamily: Platform.OS === 'ios' ? "SFUIDisplay-Regular" : "sfdisplay_regular",
    fontSize: 16,
    textAlign:'center',
    color:'#4a4a4a'
  },
  signupContent:{
    marginHorizontal:20,
    flex: 3,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor:'white'
  },
  signupPlaceholderText:{
    fontFamily: Platform.OS === 'ios' ? "SFUIDisplay-Medium" : "sfdisplay_medium",
    fontSize: 16,
    color:'#c2c4ca'
  },


  login_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'rgba(250,250,250,1)',
    paddingVertical:20
  },

  container_login_top: {
    flex: 1,
    justifyContent: 'center',
  },

  logo_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    position: 'absolute',
    width:'100%',
    resizeMode: 'contain', // or cover, contain, 'stretch'
  },

  logo : {
    width:200,
    height: 70,
  },

  logoText : {
  	marginVertical: 15,
  	fontSize:18,
    backgroundColor:'rgba(0,0,0,0)',
  	color:'black'
  },

  inputBox: {
    width:width,
    backgroundColor:'rgba(255, 255,255,0.8)',
    paddingHorizontal:16,
    paddingVertical: 13,
    fontSize:16,
    marginVertical: 1
  },
  button: {
    width:width,
    marginVertical: 5,
    paddingVertical: 13,
    alignSelf: 'stretch',

  },

  buttonText: {
    fontSize:16,
    fontWeight:'100',
    color:'#ffffff',
    textAlign:'center'
  }

});
