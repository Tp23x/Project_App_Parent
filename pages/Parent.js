import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, Text,  View ,Image} from 'react-native';

import Mybutton from './components/Mybutton';


export default class Parent extends Component {
  render() {
    return (
      <View >
        <Image  style={{width:80, height: 100 }} source={require('./img/75233776_454978935140734_6244588247419191296_n.png')} />
        <Image  style={styles.container} 
             source={require('./img/67342497_496783207745431_6494879017076785152_n.jpg')} />
        <Text style={styles.welcome}>เด็กหญิงกัญญพัชร ใหม่อ่อน</Text>
        <Mybutton
          title="สถานะของเด็ก"
          customClick={() => this.props.navigation.navigate('statusChil')}
        />
        <Mybutton
          title="ติดต่อครูประจำรถ"
          customClick={() => this.props.navigation.navigate('Tellteacher')}
        />
         <Mybutton
          title="ติดต่อคนขับรถ"
          customClick={() => this.props.navigation.navigate('Telldriver')}
        />
        <Mybutton
          title="แจ้งหยุดการรับ-ส่ง"
          customClick={() => this.props.navigation.navigate('Stoptravel')}
        />
       
      </View>

    );
  }
};


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    width:150,
    height: 200 ,
    marginLeft:130,
    justifyContent: 'center',
    backgroundColor: '#FFCCCC'
    
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    marginBottom: 20,
    width: 100,
    height:30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9999',
    borderRadius:10
  },
  
  input: {
    margin: 8,
    height: 40,
    width: 260,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius:6
  },
});