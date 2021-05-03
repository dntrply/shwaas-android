const messages = {
  toolUnlikelyToHelpPerson:
    'This tool will less likely help the person. If they are feeling unwell kindly consult nearby health care provider',
  coughInPast7Days: 'Does the person have cough in the past 7 days',
  feverInPast7Days: 'Does the person have fever in the past 7 days',
  age: 'Age',
  difficultyBreathing:
    'Does the person have breathlessness/Difficulty in breathing?',
  admitToHospital: 'Red zone. Admit to hospital',
  hardToRecogniseRelatives:
    'Is person finding it difficult to recognise relatives?',
  directlyObserve:
    'Please directly observe, check with the patient or a relative if the patient has the following symptoms in the past few hours',
  soiledClothes: 'Is there cloths soiling by urine or stool ?',
  stoppedStandingWithoutSupport:
    'Has person stopped standing without support ? ',
  cantTellBetweenDayAndNight:
    'Is person finding it difficult to tell if its day or night?',
  accessToPulseOximeter:
    'Does the person have access to pulse oximeter to measure oxygen Saturation ?',
  oxygenSaturation: 'What is the oxygen saturation reading in pulse oximeter ?',
  blueLips: 'Does lips of the  person look blueish to you',
  blueFingerTips: 'Does finger tips of the  person look blueish to you ?',
  blueTongue: 'Does tongue of the  person look blueish to you ?',
  breathCount: 'Count the respirations through breathcounter',
  accessToBPMachine:
    'Do you have access to BP machine to measure blood pressure ?',
  systolic: 'Blood Pressure (systolic- upper value)',
  diastolic: 'Blood Pressure (Diastolic- lower value)',
  passingLessUrine:
    'Is the person passing very less amount of urine than usual ?',
  coolPalms:
    'Are palms and soles of the person appear very cool to you than usual ?',
  comorbidities: 'Do you have any of comorbidities?',
  recentBloodSugarReport:
    'Does the person have a recent blood sugar report (past 3 months)?',
  bloodSugarValue: 'what was the value tested?',
  fbs: 'FBS ( empty stomach, after 6 hours of fastin)',
  pp2bs: 'PP2BS (after 2 hours of food)',
  rbs: 'RBS (sugar value other than above 2 options)',
  hba1c: 'HbA1C',
  healthProviderDiabetesAdvice:
    'What did your health provider tell you about sugar control?',
  heartDiseaseStatus: 'What is the status of heart disease ?',
  liverDiseaseStatus: 'What is the status of liver disease ?',
  sickleDiseaseStatus: 'What is the  status of sickle cell disease',
  asthmaStatus: 'What is the status of asthma or lung disease?',
  knowHeightOrWeight: 'Do you know your height and weight?',
  height: 'Height',
  weight: 'Weight',
  bmi: 'BMI',
  highRiskDelivery:
    'Is the pregnancy termed "high risk" or expected date of delivery within next 2 weeks ?',
  diabetes: 'Diabetes',
  hypertension: 'Hypertension',
  heartDisease: 'Heart Disease',
  asthma: 'Asthma',
  lungDisease: 'Lung Disease',
  sickleCellDisease: 'Sickle Cell Disease',
  liverDisease: 'Liver Disease',
  kidneyDisease: 'Kidney Disease',
  pregnancy: 'Pregnancy',
  obesity: 'Obesity',
  anemia: 'Severe Anemia',
  hiv: 'HIV',
  cancer: 'Cancer',
  wellControlledDiabetes: 'Well controlled',
  partiallyControlledDiabetes: 'Partially controlled',
  uncontrolledDiabetes: 'Uncontrolled',
  lessThan126: 'Less than 126',
  moreThan126: 'More than 126',
  dontKnow: "Don't know",
  lessThan7: 'Less than 7',
  moreThan7: 'More than 7',
  symptomsPresent: 'Symptoms Present',
  symptomsAbsent: 'Symptoms Absent',
  notSure: 'Not sure',
  lessThan200: 'Less than 200',
  moreThan200: 'More than 200',
  years: 'Years',
  bpm: 'Breaths per minute',
  cm: 'cm',
  percentage: '%',
  kg: 'kg',
  pregnant: 'Is the person pregnant?',
  welcome: 'Welcome to Covid Calculator',
  none: 'None',
  previous: 'previous',
  next: 'next',
};

const get = str => messages[str] || str;

export default {
  ...messages,
  get,
};
