import React, {useState} from 'react';
import {Text, Appbar} from 'react-native-paper';
import HorizontalComponent from '../components/common/HorizontalComponent';
import {View, StyleSheet, TouchableNativeFeedback} from 'react-native';
import LanguageSelection from '../components/LanguageSelection';
import {t} from '../messages';

const styles = StyleSheet.create({
  basicBox: {
    flex: 1,
    marginHorizontal: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appBarText: {
    color: 'white',
    fontSize: 18,
  },
  appBarTitle: {
    color: 'white',
    fontSize: 18,
  },
});

const next = function (navigation, flow, languageSelected) {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate('Questionnaire');
      }}>
      <View>
        <Text style={styles.appBarText}>
          {flow && languageSelected ? t('next') : ''}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const back = function (navigation, flow) {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate('Home');
      }}>
      <View>
        <Text style={styles.appBarText}>
          {flow ? '' : t('back')}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const LanguageSelectScreen = ({navigation, route}) => {
  const [languageSelected, setLanguageSelected] = useState(
    route.params.localState && route.params.localState.languageSelected,
  );
  return (
    <View>
      <Appbar dark="true">
        <HorizontalComponent style={styles.basicBox}>
          {back(navigation, route.params.flow)}
          <Text style={styles.appBarTitle}>
            {t('selectLanguage')}
          </Text>
          {next(navigation, route.params.flow, languageSelected)}
        </HorizontalComponent>
      </Appbar>
      <LanguageSelection
        selectedLanguageLocale={languageSelected}
        onLanguageSelect={() => setLanguageSelected(true)}
      />
    </View>
  );
};

export default LanguageSelectScreen;
