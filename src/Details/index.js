import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const {width, height} = Dimensions.get('window');
const Details = () => {
  const {DATA} = useSelector(store => store.HomeReducer);
  console.log('data', DATA);
  const dispatch = useDispatch();
  const Datarender = ({item}) => {
    return (
      <View style={styles.TopView}>
        <View style={styles.ViewForFlex}>
          <View style={{width: '80%'}}>
            <View style={styles.nameEmail}>
              <View>
                <Text>Name - </Text>
              </View>
              <View>
                <Text>{item.userName}</Text>
              </View>
            </View>
            <View style={styles.CallingEmail}>
              <View>
                <Text>Email - </Text>
              </View>
              <View style={styles.CallingNameEmail}>
                <Text style={styles.emailText}>{item.userEmail}</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={styles.dustbin}
                  source={require('../Images/edit.png')}></Image>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  let i = DATA.findIndex(ele => ele === item);
                  DATA.splice(i, 1);
                  dispatch({type: 'DELETE', payload: {DATA}});
                }}>
                <Image
                  style={styles.dustbin}
                  source={require('../Images/Delete.jpeg')}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return <FlatList data={DATA} renderItem={Datarender} />;
};

export default Details;

const styles = StyleSheet.create({
  TopView: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 20,
    backgroundColor: 'white',
    marginTop: 10,
  },
  nameEmail: {flexDirection: 'row'},
  dustbin: {
    height: 20,
    width: 20,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  safeArea: {backgroundColor: '#a8cffb'},
  View: {
    height: height,
  },
  ViewForFlex: {flexDirection: 'row'},
  ViewIn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 4,
    padding: 20,
    backgroundColor: '#a8cffb',
  },
  CallingEmail: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
