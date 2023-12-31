import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import dayjs from "dayjs";
import { SimpleLineIcons } from '@expo/vector-icons';

import { getDayColor, getDayText } from "./util";

const columnSize = 35;
const Column = ({
  text,
  color,
  opacity,
  disabled,
  onPress,
  isSelected,
  hasTodo,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        width: columnSize,
        height: columnSize,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isSelected ? '#c2c2c2': 'transparent',
        borderRadius: columnSize / 2
    }}>
      <Text style={{ color, opacity, fontWeight: hasTodo? 'bold' : 'normal' }}>{text}</Text>
    </TouchableOpacity>
  )
}

const ArrowButton = ({ iconName, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
        <SimpleLineIcons name={iconName} size={15} color='black' />
      </TouchableOpacity>
    )
  }

export default ({ // 객체 형식으로!!!
    columns,
    todoList,
    selectedDate,
    onPressLeftArrow,
    onPressHeaderDate,
    onPressRightArrow,
    onPressDate,
}) => {

    const ListHeaderComponent = () => {
        const currentDateText = dayjs(selectedDate).format('YYYY.MM.DD');
        // console.log(currentDateText);
        return (
          <View>  
            <View style={{ flexDirection: 'row', justifyContent:'center', alignItems: 'center' }}>
              <ArrowButton iconName='arrow-left' onPress={onPressLeftArrow} />
              
              <TouchableOpacity onPress={onPressHeaderDate}>
                <Text style={{ fontSize: 20, color: '#404040' }}>{currentDateText}</Text>
              </TouchableOpacity>
    
              <ArrowButton iconName='arrow-right' onPress={onPressRightArrow} />
            </View>
    
            <View style={{ flexDirection: 'row' }}>
                {[0, 1, 2, 3, 4, 5, 6].map(day => {
                const dayText = getDayText(day);
                const dayColor = getDayColor(day);
                return (
                    <Column
                    key={`day-${day}`}
                    text={dayText}
                    color={dayColor}
                    opacity={1}
                    disabled={true} /> // 넣어주지 않으면 undefined
                )
                })}
            </View>
        </View>
        )
      }
    
      const renderItem = ({item: date}) => {
        const dateText = dayjs(date).get('date');
        const day = dayjs(date).get('day');
        const color = getDayColor(day);
        const isCurrentMonth = dayjs(date).isSame(selectedDate, 'month');
        const onPress = () => onPressDate(date);
        const isSelected = dayjs(date).isSame(selectedDate, 'date');
        const hasTodo = todoList.find(todo => dayjs(todo.date).isSame(dayjs(date), 'date'));
        
        return (
          <Column
            text={dateText}
            color={color}
            opacity={isCurrentMonth ? 1 : 0.4}
            onPress={onPress}
            isSelected={isSelected}
            hasTodo={hasTodo}
          />
        )
      }

    return (
        <FlatList
            data={columns}
            scrollEnabled={false}
            keyExtractor={(_, index) => `column-${index}`} // 처음은 item
            renderItem={renderItem}
            numColumns={7}
            ListHeaderComponent={ListHeaderComponent}
      />
    )
}