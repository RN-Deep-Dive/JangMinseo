import dayjs from "dayjs";
import { useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultTodoList = [
//     {
//         id: 1,
//         content: '운동하기',
//         date: dayjs(), // 현재 시각
//         isSuccess: false,
//     },
//     {
//         id: 2,
//         content: '공부하기',
//         date: dayjs(), // 현재 시각
//         isSuccess: false,
//     },
//     {
//         id: 3,
//         content: '밥먹기',
//         date: dayjs(), // 현재 시각
//         isSuccess: false,
//     },
]

const TODO_LIST_KEY = 'TODO_LIST_KEY';

export const useTodoList = (selectedDate) => {
    const [todoList, setTodoList] = useState(defaultTodoList);
    const [input, setInput] = useState('');

    // todo를 생성, 삭제, 성공하는 기능 필요

    const saveTodoList = (newTodoList) => {
        setTodoList(newTodoList);
        AsyncStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodoList));
        // 저장소에 newTodoList가 string화된 값으로 저장되어 있음
    }

    const addTodo = () => {
        const len = todoList.length;
        const lastId = len === 0 ? 0 : todoList[len - 1].id;

        const newTodoList = [
            ...todoList,
            {
                id: lastId + 1,
                content: input,
                date: selectedDate,
                isSuccess: false,
            }
        ]
        saveTodoList(newTodoList);
    }

    const removeTodo = (todoId) => {
        const newTodoList = todoList.filter(todo => todo.id !== todoId);
        saveTodoList(newTodoList);
        // AsyncStorage.getItem(TODO_LIST_KEY);
    }

    const toggleTodo = (todoId) => {
        const newTodoList = todoList.map(todo => {
            if (todo.id !== todoId) return todo;
               return {
                ...todo,
                isSuccess: !todo.isSuccess,
            }
        });
        saveTodoList(newTodoList);
    }

    const resetInput = () => setInput('');

    const filteredTodoList = todoList.filter(todo => {
        const isSameDate = dayjs(todo.date).isSame(selectedDate, 'date');
        return isSameDate;
      });

      useEffect(() => {
        init();
      }, []);
      const init = async () => {
        const result = await AsyncStorage.getItem(TODO_LIST_KEY);
        if (result) {
            const newTodoList = JSON.parse(result); // typeof로 알아볼 수 있음
            //// 빈 배열 -> 로드 되는 동안에 로딩중을 알리는 State나 Indicator 있으면 좋음!
            setTodoList(newTodoList);
        }        
      }

    return {
        todoList,
        filteredTodoList,
        addTodo,
        removeTodo,
        toggleTodo,
        input,
        setInput,
        resetInput,
    }
}