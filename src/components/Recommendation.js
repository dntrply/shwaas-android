import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import messages from '../messages';

export default ({data}) => {
  return (
    <View style={{flex: 1, marginTop: 20}}>
      <View
        style={{
          backgroundColor: data.shortMessageTextAndOuterBoxColor,
          alignItems: 'center',
          paddingTop: 20,
          paddingBottom: 20,
          paddingHorizontal: 10,
        }}>
        <Text style={{color: '#EEF7F1', fontSize: 32}}>
          {messages[data.startingMessageKey]}
        </Text>
        <View
          style={{
            backgroundColor: '#EEF7F1',
            borderRadius: 8,
            alignItems: 'center',
            alignSelf: 'stretch',
          }}>
          <Text
            style={{
              color: data.shortMessageTextAndOuterBoxColor,
              fontSize: 40,
            }}>
            {messages[data.shortMessageKey]}
          </Text>
        </View>
      </View>
    </View>
  );
};
