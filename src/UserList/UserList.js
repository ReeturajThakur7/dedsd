import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, View, FlatList, Image, Text} from 'react-native';

import getUsersList from './action';

export default function UsersList() {
  //   const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const store = useSelector(store => store.UsersListReducer);

  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  const onRender = ({item}) => {
    return (
      <View style={styles.itemCon}>
        <View style={styles.imgCon}>
          <Image
            resizeMode="cover"
            resizeMethod="resize"
            source={{uri: item.avatar}}
            style={styles.imgStyle}
          />
        </View>
        <View style={styles.rightCon}>
          <Text style={styles.textStyle}>{item.email}</Text>
          <Text
            style={
              styles.textStyle
            }>{`${item.first_name} ${item.last_name}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>{<FlatList data={store.listData} renderItem={onRender} />}</View>
  );
}

const styles = StyleSheet.create({
  itemCon: {
    height: 100,
    width: '100%',
    borderRadius: 8,
    marginVertical: 30,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'pink',
  },
  imgCon: {
    width: 80,
    height: 80,
    borderRadius: 80,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  rightCon: {
    padding: 20,
  },
  textStyle: {
    marginTop: 5,
    fontStyle: 'italic',
    fontWeight: '500',
  },
});
