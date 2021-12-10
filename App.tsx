import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ListScheduleScreen from './src/screens/ListScheduleScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'LIVE ATTENDANCE',
            headerLeft: () => (
              <View>
                <Text>left</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>right</Text>
              </View>
            ),
            headerStyle: {backgroundColor: 'yellow'},
          }}
        />
        <Stack.Screen name="ListSchedule" component={ListScheduleScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
