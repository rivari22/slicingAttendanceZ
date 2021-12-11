/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import {ICardMini} from './Card.Mini.type';

export const ContainerCard = styled(View)`
  border-radius: 8px;
  background-color: grey;
  padding: 12px;
  margin-top: 8px;
  width: ${({width}: {width?: Number; isScroll?: boolean; flex?: number}) =>
    width ? width + 'px' : 'auto'};
  margin-right: ${({isScroll}: {isScroll?: boolean}) =>
    isScroll ? '12px' : '0'};
  flex-shrink: ${({flex}: {flex?: number}) => flex ?? 6};
`;

const formatDate = (date: Date) => {
  return `${new Date(date).getFullYear}-${new Date(date).getMonth}-${
    new Date(date).getDate
  }`;
};

const Mini = (props: ICardMini) => {
  const isToday = useMemo(
    () => formatDate(new Date(props.date)) === formatDate(new Date()),
    [props.date],
  );

  return (
    <ContainerCard flex={1}>
      <Text style={{marginBottom: 12}}>{props.label}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
            <Text>Today</Text>
          </View>
        )}
      </View>
    </ContainerCard>
  );
};

export default Mini;
