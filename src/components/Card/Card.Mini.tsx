/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {ICardMini} from './Card.Mini.type';

export const ContainerCard = styled(View)`
  border-radius: 8px;
  background-color: ${({
    bgColor,
  }: {
    bgColor?: string;
    width?: Number;
    isScroll?: boolean;
    flex?: number;
  }) => (bgColor ? bgColor : '#f4f4f4')};
  padding: 12px;
  margin-top: 8px;
  width: ${({width}: {width?: Number; isScroll?: boolean; flex?: number}) =>
    width ? width + 'px' : 'auto'};
  margin-right: ${({isScroll}: {isScroll?: boolean}) =>
    isScroll ? '12px' : '0'};
  flex-shrink: ${({flex}: {flex?: number}) => flex ?? 6};
`;

const formatDate = (date: Date) => {
  return `${new Date(date).getFullYear()}-${new Date(
    date,
  ).getMonth()}-${new Date(date).getDate()}`;
};

const Mini = (props: ICardMini) => {
  const isToday = useMemo(
    () => formatDate(new Date(props.date)) === '2021-3-5',
    [props.date],
  );

  return (
    <ContainerCard
      flex={1}
      bgColor={props.label ? '#f4f4f4' : 'white'}
      style={{
        borderStyle: props.label ? 'solid' : 'dashed',
        borderWidth: props.label ? 0 : 1,
      }}>
      <TouchableOpacity onPress={props.onPress}>
        {props.label ? (
          <>
            <Text style={{marginBottom: 12}}>{props.label}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOXAs-ma-cfFGyawBgPi3a1o7qFGaHOmI-og&usqp=CAU',
                }}
                width={16}
                height={16}
                style={{width: 16, height: 16, marginRight: 10}}
              />
              <Text>{props.labelTime}</Text>
              {isToday && (
                <View
                  style={{
                    backgroundColor: 'red',
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    marginLeft: 8,
                    borderRadius: 4,
                  }}>
                  <Text style={{color: 'white'}}>Today</Text>
                </View>
              )}
            </View>
          </>
        ) : (
          <View
            style={{
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>NO SCHEDULE</Text>
          </View>
        )}
      </TouchableOpacity>
    </ContainerCard>
  );
};

export default Mini;
