import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ITEM_WIDTH, bottomSpace } from './util';

export default ({
  value,
  onChangeText,
  placeholder,
  onPressAdd,
  onSubmitEditing,
  onFocus,
}) => {
  return (
    <View style={{
      width: ITEM_WIDTH,
      // marginBottom: bottomSpace,
      flexDirection: 'row',
      alignSelf: 'center',
    }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{
          flex: 1,
          padding: 5,
        }}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={false}
        onFocus={onFocus}
      />
      <TouchableOpacity onPress={onPressAdd} style={{ padding: 5 }}>
        <AntDesign name='plus' size={18} color='#595959' />
      </TouchableOpacity>
      
    </View>
  )
}