/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components';
import {ContainerCard} from '../components/Card/Card.Mini';
// import Icon from 'react-native-vector-icons/Ionicons';

const TextBold = styled(Text)`
  font-size: 16px;
  font-weight: bold;
`;

const CardSchedule = ({label, time}: {label: String; time?: String}) => (
  <View style={{marginBottom: 20}}>
    <TextBold>{label}</TextBold>
    <ContainerCard>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {!!time && (
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOXAs-ma-cfFGyawBgPi3a1o7qFGaHOmI-og&usqp=CAU',
            }}
            width={16}
            height={16}
            style={{width: 16, height: 16, marginRight: 10}}
          />
        )}
        <Text>{time ? time : '--:--'}</Text>
      </View>
    </ContainerCard>
  </View>
);

const DetailScreen = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchListSchedule = async () => {
      const result = await fetch(
        'https://private-anon-4f90efdeb0-schedule25.apiary-mock.com/schedules/id',
      );
      const resData = await result.json();
      setData(resData.data);
    };
    fetchListSchedule();
  }, []);

  return (
    <View style={{padding: 16, backgroundColor: '#ffffff', flex: 1}}>
      <TextBold>Store</TextBold>
      <ContainerCard>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={{
                uri: data?.storeImage,
              }}
              width={100}
              height={100}
              style={{
                height: 100,
                width: 100,
                borderRadius: 12,
                marginRight: 10,
              }}
            />
          </View>
          <View style={{maxWidth: 220}}>
            <Text>{data?.store}</Text>
            <Text ellipsizeMode="tail">{data?.description}</Text>
          </View>
        </View>
      </ContainerCard>

      <View style={{marginTop: 20}}>
        <CardSchedule label={'TIME SCHEDULE'} time={data?.schedule} />
        <CardSchedule label={'CLOCK IN'} time={data?.clockIn} />
        <CardSchedule label={'CLOCK OUT'} time={data?.clockOut} />
      </View>
    </View>
  );
};

export default DetailScreen;
