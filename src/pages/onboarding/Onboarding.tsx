import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import slides from './slides';
import {MyButton} from '../../components';
import OnboardingItem from './OnboardingItem';

const Onboarding = ({navigation}: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const changePageOnboarding = () => {
    console.log('a');
    if (currentIndex === 0) {
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex === 1) {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <OnboardingItem item={slides[currentIndex]} />

      <View style={[styles.btn]}>
        <MyButton title="Next" onPress={changePageOnboarding} />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flex: 0.2,
    justifyContent: 'center',
  },
});
