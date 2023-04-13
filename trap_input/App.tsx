import React from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Select from './components/Select/Select';
import {StartTrashTrapForm, trashTrapOptions} from './components/Select/Select';
import PredictiveInput from './components/PredictiveInput/PredictiveInput';

function App(): JSX.Element {
  const [startTrashTrapForm, setStartTrashTrapForm] =
    useState<StartTrashTrapForm>({
      groupName: '',
      trashTrapId: '1',
      trashTrapType: trashTrapOptions.TT1,
      debrisType: undefined,
      dataType: undefined,
    });

  return (
    <View style={styles.App}>
      <Select
        header={'Down Down Menu'}
        options={trashTrapOptions}
        value={startTrashTrapForm.trashTrapType}
        setValue={value =>
          setStartTrashTrapForm({...startTrashTrapForm, trashTrapType: value})
        }
      />
      <PredictiveInput />
    </View>
  );
}

const styles = StyleSheet.create({
  App: {
    backgroundColor: '#297FD9',
    // backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 100,
    width: '100%',
    height: '100%',
  },
});

export default App;
