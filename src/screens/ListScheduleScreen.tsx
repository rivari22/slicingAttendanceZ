/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import Card from '../components/Card/Card';

const CardDay = (props: {date: string}) => {
  const date = useMemo(() => {
    const weekday = new Array(7);
    weekday[0] = 'SUN';
    weekday[1] = 'MON';
    weekday[2] = 'TUE';
    weekday[3] = 'WED';
    weekday[4] = 'THU';
    weekday[5] = 'FRI';
    weekday[6] = 'SAT';

    const day = weekday[new Date(props.date).getDay()];
    const dayInDate = new Date(props.date).getDate();
    return {
      day,
      dayInDate,
    };
  }, [props.date]);

  return (
    <View style={{alignItems: 'center', marginRight: 12, marginTop: 8}}>
      <Text style={{fontSize: 12}}>{date.day}</Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 4,
          color: date.day === 'SUN' ? 'red' : 'black',
        }}>
        {date.dayInDate}
      </Text>
    </View>
  );
};

interface IListScheduleData {
  id: number;
  date: string;
  schedule: string;
  store: string;
  'store-image': string;
  clockIn: string;
  clockOut: string;
}

const ListScheduleScreen = () => {
  const navigation = useNavigation<any>();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchListSchedule = async () => {
      const result = await fetch(
        'https://private-anon-4f90efdeb0-schedule25.apiary-mock.com/schedules',
      );
      const resData = await result.json();
      setData(resData.data);
    };
    fetchListSchedule();
  }, []);

  return (
    <View style={{backgroundColor: '#ffffff'}}>
      {data?.map((item: IListScheduleData) => (
        <View style={{flexDirection: 'row', padding: 8}} key={item.id}>
          <CardDay date={item.date} />
          <Card.Mini
            onPress={() => navigation.navigate('DetailSchedule')}
            label={item.store}
            labelTime={item.schedule}
            date={`${item.date}`}
          />
        </View>
      ))}
    </View>
  );
};

export default ListScheduleScreen;
