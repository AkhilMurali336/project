import React, { Component } from 'react';
import { 
  StyleSheet,
   Text, 
   View, 
   StatusBar
  } from 'react-native';
  import Logo from '../components/Logo';
  import Form from '../components/Form';
export default class Signup extends Component{
  render(){
  return (
      <View style={styles.container}>
      <Logo/>    
      <Form type="Signup"/>

<View style={styles.signupTextcont}>

    <Text style={styles.signupText}>Already have an account?</Text>
    <Text style={styles.signupButton}>Sign In</Text>
</View>

      </View>


  )
  }
}
const styles=StyleSheet.create(
    {
        container:{
backgroundColor:'#005b4f',
flex:1,
alignItems:'center',
justifyContent:'center'
        },
       signupTextcont:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row'
       },

       signupText:{
           color:'rgba(255,255,255,0.7)',
           fontSize:16
           
       },
       signupButton:{
           color:'#ffffff',
           fontSize:16,
           fontWeight:'500'
       }

        


    }
);