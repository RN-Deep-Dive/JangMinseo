// 라이브러리 import한 것은 위쪽에
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import dayjs from 'dayjs';

// 직접 만든 것들은 아래쪽에
import { FlatList, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { getCalendarColumns } from './src/util';
import Margin from './src/Margin';
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { useCalendar } from './src/hook/use-calendar';
import { useTodoList } from './src/hook/use-todo-list';
import Calendar from './src/Calendar';

export default function App() {
  const now = dayjs();
  const {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtract1Month,
    add1Month,
  } = useCalendar(now);

  const {
    todoList,
    addTodo,
    removeTodo,
    toggleTodo,
    input,
    setInput,
  } = useTodoList(selectedDate);

  const columns = getCalendarColumns(selectedDate);

  const onPressLeftArrow = subtract1Month;
  const onPressRightArrow = add1Month;
  const onPressHeaderDate = showDatePicker;
  const onPressDate = setSelectedDate;


  // const ListHeaderComponent = () => {

  // }

  useEffect(() => {
    // console.log('changed sd', dayjs(selectedDate).format('YYYY.MM.DD'));
  }, [selectedDate]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://img.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1373-159.jpg?w=1060&t=st=1667524235~exp=1667524835~hmac=8a3d988d6c33a32017e280768e1aa4037b1ec8078c98fe21f0ea2ef361aebf2c",
         }}
         style={{
          width: '100%',
          height: '100%',
          position: 'absolute' // flastlist 보다 앞 코드
         }}
      />

      <Calendar
        columns={columns}
        selectedDate={selectedDate}
        onPressLeftArrow={onPressLeftArrow}
        onPressHeaderDate={onPressHeaderDate}
        onPressRightArrow={onPressRightArrow}
        onPressDate={onPressDate}
      />

      <FlatList
        data={todoList}
        renderItem={({ item: todo }) => {
          return  (
            <Text>{todo.content}</Text>
          )
        // ListHeaderComponent={ListHeaderComponent}
        }}
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});