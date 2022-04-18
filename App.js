import {Provider} from 'react-redux';
import React from 'react';
import {SafeAreaView} from 'react-native';
import store from './src/reducer/storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from './src/Details';
import Home from './src/Home';
import UsersList from './src/UserList/UserList';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <Provider store={store}>
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen name="Home" component={Home} />
            <stack.Screen name="Details" component={Details} />
            <stack.Screen name="userList" component={UsersList} />
          </stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
