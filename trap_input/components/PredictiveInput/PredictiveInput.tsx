import React, {useState, useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AutocompleteInput from 'react-native-autocomplete-input';
import {styles} from './PredictiveInput.style';
import {styles as headerStyle} from '../Select/Select.style';

interface Trap {
  name: string;
  key: string;
}

type Traps = Trap[];

function filterTrashTraps(traps: Traps, input?: string): Traps {
  if (!input || !traps.length) {
    return [];
  }
  const regex = new RegExp(`${input.trim()}`, 'i');
  return traps.filter(trap => trap.name.search(regex) >= 0);
}

const PredictiveInput = () => {
  const [data, setData] = useState([
    {name: 'trash_trap_type.one', key: '1'},
    {name: 'trash_trap_type.two', key: '2'},
    {name: 'trash_trap_type.three', key: '3'},
    {name: 'trash_trap_type.four', key: '4'},
    {name: 'random.five', key: '5'},
  ]);
  const [userInput, setUserInput] = useState('');

  const queriedTrashTraps = useMemo(
    () => filterTrashTraps(data, userInput),
    [data, userInput],
  );

  console.log(queriedTrashTraps);

  const suggestions: Traps = useMemo(
    () =>
      queriedTrashTraps.length === 1 &&
      queriedTrashTraps[0].name.toLowerCase() === userInput.toLowerCase().trim()
        ? [] // Close suggestion list in case movie title matches query
        : queriedTrashTraps,
    [queriedTrashTraps, userInput],
  );

  return (
    <View style={headerStyle.SelectBoxWrapper}>
      <Text style={headerStyle.SelectBoxHeader}>Autocomplete Input</Text>
      <View style={headerStyle.SelectBox}>
        <AutocompleteInput
          style={styles.SelectBox}
          data={suggestions}
          autoCapitalize="none"
          placeholder={'Testing'}
          onChangeText={setUserInput}
          autoCorrect={false}
          inputContainerStyle={styles.SelectBox}
          value={userInput}
          flatListProps={{
            keyExtractor: trashTrap => trashTrap.key,
            renderItem: ({item}) => (
              <TouchableOpacity
                onPress={() => {
                  setUserInput(item.name);
                }}>
                <Text style={styles.itemText}>{item.name}</Text>
              </TouchableOpacity>
            ),
          }}
          listContainerStyle={styles.listContainer}
        />
      </View>
    </View>
    // </View>
  );
};

export default PredictiveInput;
