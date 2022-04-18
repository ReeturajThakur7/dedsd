import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

const {width, height} = Dimensions.get('window');

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const DATA = useSelector(store => store.HomeReducer);
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');

  const Adding = () => {
    dispatch({type: 'ADD', payload: {userName: Name, userEmail: Email}});
  };

  return (
    <View style={styles.View}>
      <View style={styles.ViewIn}>
        <Text style={styles.Text4show}>SHOW CARD</Text>
        {/* <Text style={styles.Text4show}>{userName}</Text> */}
        {/* <Text> {userEmail}</Text> */}
      </View>
      <View style={styles.OuterViewforshow}>
        <View style={styles.ViewCard}>
          <Text>Name</Text>
          <TextInput
            style={styles.inputTextName}
            placeholder="Enter Name"
            value={Name}
            autoCorrect={false}
            onChangeText={value => {
              setName(value);
            }}></TextInput>
        </View>

        <View style={{padding: 7}}>
          <Text>Email</Text>
          <TextInput
            style={styles.inputEmail}
            value={Email}
            autoCorrect={false}
            onChangeText={value => {
              setEmail(value);
            }}
            placeholder="Enter Email"></TextInput>
        </View>

        <TouchableOpacity
          // disabled={check}
          activeOpacity={0.7}
          onPress={() => {
            Adding();
          }}
          style={[styles.AddButton]}>
          <Text>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details');
          }}
          style={[styles.AddButton]}>
          <Text>Go</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('userList');
          }}
          style={[styles.AddButton]}>
          <Text>Go to UsersList</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    // height: height / 1.1,
    flex: 1,
    borderWidth: 2,
    backgroundColor: 'pink',
  },

  ViewIn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 4,
    padding: 20,
    // backgroundColor: 'red',
  },
  Text4show: {color: 'white', fontWeight: 'bold', fontSize: 20},
  OuterViewforshow: {
    borderRadius: 20,
    padding: 8,
    backgroundColor: 'white',
    height: height / 2.2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },

  ViewCard: {
    padding: 7,
    marginTop: 20,
    borderRadius: 50,
  },
  inputTextName: {
    width: width / 1.1,
    height: height / 18,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
  // ValidNameText: {color: 'red', marginLeft: 10},
  inputEmail: {
    width: width / 1.1,
    height: height / 18,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },

  AddButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 2,
    height: height / 20,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: 'red',
  },
  // TextAdd: {
  //   textAlign: 'center',
  //   marginTop: 8,
  //   height: height / 30,
  // },
});
