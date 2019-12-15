import React, { Component } from 'react';
import { 
  StyleSheet,
   View, 
   StatusBar
  } from 'react-native';
   

    import Login from './src/Pages/Login';
    import Signup from './src/Pages/Signup';



export default class App extends Component<{}> {
  render(){
  return (
    <View style={styles.container}>
    <StatusBar  
      backgroundColor = "#43a047"  
      barStyle = "light-content"/>  


<Login/>
    </View>
  );
}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005b4f',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
