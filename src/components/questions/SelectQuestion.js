import React from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
  FlatList,
} from 'react-native';
import {Text} from 'react-native-paper';
import QuestionBase from './QuestionBase';
import messages from '../../domain/messages';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nonSelectedItem: {
    backgroundColor: '#F4F5F6',
    paddingHorizontal: 5,
    marginVertical: 8,
    minHeight: 50,
    borderRadius: 4,
    justifyContent: 'center',
  },

  selectedItem: {
    backgroundColor: '#38A160',
    paddingHorizontal: 5,
    marginVertical: 8,
    minHeight: 50,
    borderRadius: 4,
    justifyContent: 'center',
  },
  selectedAnswerText: {
    fontSize: 24,
    color: '#FFF',
  },
  nonSelectedAnswerText: {
    fontSize: 24,
    color: '#000',
  },
});

const Item = ({title, onPress, selectedAnswers}) => {
  const isSelected = selectedAnswers.includes(title);
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[isSelected ? styles.selectedItem : styles.nonSelectedItem]}>
        <Text
          style={[
            isSelected
              ? styles.selectedAnswerText
              : styles.nonSelectedAnswerText,
          ]}>
          {messages[title]}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ({
  number,
  question,
  onAnswered = () => {},
  selectedAnswers = [],
}) => {
  const renderItem = ({item}) => (
    <Item title={item} onPress={onAnswered} selectedAnswers={selectedAnswers} />
  );

  return (
    <View style={styles.container}>
      <QuestionBase number={number} question={question} />
      <FlatList
        data={question.options}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </View>
  );
};
