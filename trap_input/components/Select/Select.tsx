import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Text, Pressable, SafeAreaView, View} from 'react-native';
import {styles} from './Select.style';

interface Props {
  header: string;
  options: object;
  value: string;
  setValue: (value: any) => void;
}

export interface StartTrashTrapForm {
  groupName: string;
  trashTrapId: string;
  trashTrapType: string;
  debrisType: 'large' | 'small' | undefined;
  dataType: 'simple' | 'detailed' | undefined;
}

export const trashTrapOptions = {
  TT1: 'trash_trap_type.one',
  TT2: 'trash_trap_type.two',
  TT3: 'trash_trap_type.three',
  TT4: 'trash_trap_type.four',
};

const Select = ({header, options, value, setValue}: Props) => {
  let itemArray: Array<any> = [];
  Object.keys(options).map(key => {
    const itemObj = {label: options[key], value: options[key]};
    itemArray.push(itemObj);
  });

  return (
    <>
      <SafeAreaView style={styles.SelectBoxWrapper}>
        <Text style={styles.SelectBoxHeader}>{header}</Text>
        <RNPickerSelect
          onValueChange={input => setValue(input)}
          items={itemArray}>
          <Pressable style={styles.SelectBox}>
            <Text style={styles.SelectText} numberOfLines={1}>
              {value}
            </Text>
            <View style={styles.DropdownArrow} />
          </Pressable>
        </RNPickerSelect>
      </SafeAreaView>
    </>
  );
};

export default Select;
