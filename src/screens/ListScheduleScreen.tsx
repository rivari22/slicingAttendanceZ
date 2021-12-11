/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Card from '../components/Card/Card';

const CardDay = () => (
  <View style={{alignItems: 'center', marginRight: 12, marginTop: 8}}>
    <Text style={{fontSize: 12}}>MON</Text>
    <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 4}}>5</Text>
  </View>
);

const ListScheduleScreen = () => {
  return (
    <View style={{flexDirection: 'row', padding: 8}}>
      <CardDay />
      <Card.Mini label="helo" labelTime="08:00 - 17:00" date={new Date()} />
    </View>
  );
};

export default ListScheduleScreen;
