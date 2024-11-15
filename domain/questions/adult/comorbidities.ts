import questionTypes from '../../questionTypes/QuestionType';
import {alwaysShow, objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const key = 'comorbidities';

const output = form => {
  const values = form[key] || [];
  if (values.find(value => value === 'kidneyDisease'))
    return objectify(outputWeight.red);
  if (values.length > 0) return objectify(outputWeight.yellow);
  return outputWeight.green;
};

export default <Question>{
  key,
  label: key,
  helpText: 'comorbiditiesHelpText',
  type: questionTypes.multichoice,
  options: [
    'diabetes',
    'hypertension',
    'heartDisease',
    'asthma',
    'lungDisease',
    'sickleCellDisease',
    'liverDisease',
    'kidneyDisease',
    'pregnancy',
    'obesity',
    'underNutrition',
    'anemia',
    'hiv',
    'cancer',
  ],
  optionImages: {
    lungDisease: require('../../../assets/images/lungDisease.jpg'),
  },
  show: alwaysShow,
  output,
};
