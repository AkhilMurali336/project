import React, { Component } from 'react';
import { 
  StyleSheet,
   Text, 
   View, 
   TextInput,
   TouchableOpacity
  } from 'react-native';

export default class Logo extends Component {
  render(){
      return(
        <View style={styles.container}>
       <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
       placeholder="Email"
       placeholderTextColor='#ffffff'/>
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
       placeholder="Password"
       placeholderTextColor='#ffffff'
       secureTextEntry={true}/>
       <TouchableOpacity style={styles.button}onPress={()=>{this.props.navigate(Signup)}}> 
      <Text style={styles.buttonText}></Text></TouchableOpacity>

       
      </View>
      )
  }
}
 const styles=StyleSheet.create(
 {
    container:{
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center'

    },
    inputBox:{
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        marginVertical:10,height:50
    },
    button:{
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingVertical:12,
        marginVertical:10
    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }


 }
 );