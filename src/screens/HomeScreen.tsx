/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import styled from 'styled-components';
import {ContainerCard} from '../components/Card/Card.Mini';

const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');

const Container = styled(View)`
  background-color: #ffffff;
`;

const HeroContainer = styled(View)`
  background-color: yellow;
  height: ${screenHeight * 0.3}px;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 36px;
  border-bottom-left-radius: 36px;
`;

const TitleSubMenu = ({
  label,
  onPress,
  labelOnPress,
}: {
  label: string;
  onPress: () => void;
  labelOnPress: string;
}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <Text
      style={{fontWeight: 'bold', fontSize: 16, textTransform: 'uppercase'}}>
      {label}
    </Text>
    <TouchableOpacity onPress={onPress}>
      <Text style={{color: 'red'}}>{labelOnPress}</Text>
    </TouchableOpacity>
  </View>
);

const AbsenCard = () => (
  <ContainerCard>
    <Text>Mediteriana Garden blabla</Text>
    <Text>08:00 - 17:00</Text>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          paddingVertical: 4,
          paddingHorizontal: 8,
          borderRadius: 4,
        }}>
        <Text style={{color: 'white'}}>Clock in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          paddingVertical: 4,
          paddingHorizontal: 8,
          borderRadius: 4,
        }}>
        <Text style={{color: 'white'}}>Clock out</Text>
      </TouchableOpacity>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text>--:--</Text>
      <Text>--:--</Text>
    </View>
  </ContainerCard>
);

const NextScheduleCard = (props: any) => {
  const date = useMemo(() => {
    const weekday = new Array(7);
    weekday[0] = 'SUN';
    weekday[1] = 'MON';
    weekday[2] = 'TUE';
    weekday[3] = 'WED';
    weekday[4] = 'THU';
    weekday[5] = 'FRI';
    weekday[6] = 'SAT';
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const day = weekday[new Date(props.date).getDay()].toUpperCase();
    const dayInDate = new Date(props.date).getDate();
    const month = monthNames[new Date(props.date).getMonth()];

    return {
      day,
      date: `${dayInDate} ${month}`,
    };
  }, [props.date]);
  return (
    <ContainerCard width={screenWidth * 0.8} isScroll>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={{fontSize: 10, textTransform: 'uppercase'}}>
          {date.day}
        </Text>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{date.date}</Text>
        <View style={{marginTop: 12}}>
          <Text>{props.store || 'Mediterania Garden Residence'}</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOXAs-ma-cfFGyawBgPi3a1o7qFGaHOmI-og&usqp=CAU',
              }}
              width={16}
              height={16}
              style={{width: 16, height: 16, marginRight: 10}}
            />
            <Text>{props.schedule || '08:00 - 17:00'}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ContainerCard>
  );
};

const Button = ({
  label,
  onPress,
  isPrimaryBtn,
}: {
  label: string;
  onPress: () => void;
  isPrimaryBtn?: boolean;
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      paddingHorizontal: 54,
      paddingVertical: 12,
      backgroundColor: isPrimaryBtn ? 'green' : 'grey',
      borderRadius: 8,
    }}>
    <Text style={{fontSize: 18, color: 'white'}}>{label}</Text>
  </TouchableOpacity>
);

const HomeScreen = () => {
  //FIXME TYPE ANY
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
    <Container>
      <HeroContainer>
        <Text style={{fontWeight: 'bold', fontSize: 54}}>07:30</Text>
        <Text>Monday, 5 Apr 2021</Text>
      </HeroContainer>
      <View
        style={{
          paddingHorizontal: 8,
          paddingTop: 8,
          paddingBottom: 12,
        }}>
        <View style={{marginTop: 14}}>
          <TitleSubMenu
            label="Today's Schedule"
            onPress={() => undefined}
            labelOnPress="Refresh"
          />
          <AbsenCard />
        </View>
        <View style={{marginTop: 14}}>
          <TitleSubMenu
            label="Next Schedule"
            onPress={() => navigation.navigate('ListSchedule')}
            labelOnPress="See all"
          />
          <ScrollView horizontal>
            {data?.map((item: any) => (
              <View key={item.id}>
                <NextScheduleCard
                  {...item}
                  onPress={() => navigation.navigate('DetailSchedule')}
                />
              </View>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 24,
          }}>
          <Button label="Clock In" onPress={() => undefined} isPrimaryBtn />
          <Button label="Clock Out" onPress={() => undefined} />
        </View>
      </View>
    </Container>
  );
};

export default HomeScreen;
