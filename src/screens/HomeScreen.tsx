/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styled from 'styled-components';
import {ContainerCard} from '../components/Card/Card.Mini';

const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');

const Container = styled(View)``;

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

const NextScheduleCard = () => (
  <ContainerCard width={screenWidth * 0.8} isScroll>
    <Text style={{fontSize: 10, textTransform: 'uppercase', color: 'white'}}>
      Wednesday
    </Text>
    <Text style={{fontSize: 16, fontWeight: 'bold'}}>7 April</Text>
    <View style={{marginTop: 12}}>
      <Text>Mediteriana Garden blabla</Text>
      <Text>08:00 - 17:00</Text>
    </View>
  </ContainerCard>
);

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
  return (
    <Container>
      <HeroContainer>
        <Text style={{fontWeight: 'bold', fontSize: 54}}>07:30</Text>
        <Text>Monday, 5 Apr 2021</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ListSchedule')}>
          <Text>Go to list schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetailSchedule')}>
          <Text>Go to detail</Text>
        </TouchableOpacity>
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
            onPress={() => undefined}
            labelOnPress="See all"
          />
          <ScrollView horizontal>
            <NextScheduleCard />
            <NextScheduleCard />
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
