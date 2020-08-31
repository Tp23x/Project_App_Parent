
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Calls extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calls: [
        {id:1,  name: "คุณครูมานะ มานพ",   date:"ครูประจำรถคันที่ 1", time:'083-5647584', video:false, image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
        {id:2,  name: "คุณครูนาดี สีขาว",  date:"ครูประจำรถคันที่ 2", time:'081-2352554', video:false, image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
        {id:3,  name: "คุณครูแก้ว นานา", date:"ครูประจำรถคันที่ 3", time:'083-3455768', video:true,  image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
        {id:4,  name: "คุณครูต้นไม้ ร่มเย็น", date:"ครูประจำรถคันที่ 4", time:'086-5435654', video:false, image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:5,  name: "คุณครูแดง มานพ",   date:"ครูประจำรถคันที่ 5", time:'097-688986', video:true,  image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
        {id:6,  name: "คุณครูสบาย สีแดง",   date:"ครูประจำรถคันที่ 6", time:'089-8775756', video:false, image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
        {id:8,  name: "John Doe",   date:"12 jul", time:'11:22 am', video:true,  image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
        {id:9,  name: "John Doe",   date:"12 aug", time:'13:33 am', video:false, image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:10, name: "John Doe",   date:"12 oct", time:'11:58 am', video:true,  image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
        {id:11, name: "John Doe",   date:"12 jan", time:'09:28 am', video:false, image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
      ]
    };
  }

  renderItem = ({item}) => {
    var callIcon = "https://img.icons8.com/color/48/000000/phone.png";
    if(item.video == true) {
      callIcon = "https://img.icons8.com/color/48/000000/video-call.png";
    }
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.name}</Text>
            </View>
            <View style={styles.end}>
              <Image style={[styles.icon, {marginLeft:15, marginRight:5, width:14, height:14}]} source={{uri:"https://img.icons8.com/small/14/000000/double-tick.png"}}/>
              <Text style={styles.time}>{item.date} {"|"}{item.time}</Text>
            </View>
          </View>
          <Image style={[styles.icon, { marginRight: 50 }]} source={{uri: callIcon}}/>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return(
      <View style={{ flex: 1 }} >
        <FlatList 
          extraData={this.state}
          data={this.state.calls}
          keyExtractor = {(item) => {
            return item.id;
          }}
          renderItem={this.renderItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'space-between',

  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 270,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,

  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,

  },
  icon:{
    height: 28,
    width: 28, 
  }
}); 