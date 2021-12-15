/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ListScheduleScreen from './src/screens/ListScheduleScreen';
import DetailScreen from './src/screens/DetailScreen';
import {QueryClient, QueryClientProvider} from 'react-query';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

const headerStyle = {
  backgroundColor: 'yellow',
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'LIVE ATTENDANCE',
              headerLeft: () => (
                <View>
                  <Image
                    source={{
                      uri: 'https://lh3.googleusercontent.com/ogw/ADea4I6Hz8_eBOqlh2PAiZ46YkRoXiE8Je7s7b8PSuV5xw=s32-c-mo',
                    }}
                    width={30}
                    height={30}
                    style={{width: 30, height: 30, borderRadius: 15}}
                  />
                </View>
              ),
              headerRight: () => (
                <View>
                  <Image
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uVgcbZ0qWB3dZC9OPHPyvSKTNtoeA0rI0w&usqp=CAU',
                    }}
                    width={20}
                    height={20}
                    style={{width: 20, height: 20}}
                  />
                </View>
              ),
              headerStyle,
              contentStyle: {
                shadowRadius: 0,
                shadowOffset: {
                  height: 0,
                  width: 0,
                },
                shadowColor: 'transparent',
              },
            }}
          />
          <Stack.Screen
            name="ListSchedule"
            component={ListScheduleScreen}
            options={{headerStyle, title: 'Upcoming Schedule'}}
          />
          <Stack.Screen
            name="DetailSchedule"
            component={DetailScreen}
            options={{headerStyle, title: '7 April 2021'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
