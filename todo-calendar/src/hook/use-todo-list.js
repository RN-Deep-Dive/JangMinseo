import dayjs from "dayjs";
import { useState } from "react"

const defaultTodoList = [
    {
        id: 1,
        content: '운동하기',
        date: dayjs(), // 현재 시각
        isSuccess: false,
    },
    {
        id: 2,
        content: '공부하기',
        date: dayjs(), // 현재 시각
        isSuccess: false,
    },
    {
        id: 3,
        content: '밥먹기',
        date: dayjs(), // 현재 시각
        isSuccess: false,
    },
]

export const useTodoList = () => {
    const [todoList, setTodoList] = useState(defaultTodoList);
    const [input, setInput] = useState('');

    // todo를 생성, 삭제, 성공하는 기능 필요

    const addTodo = (selectedDate) => {
        const len = todoList.length;
        const lastId = len === 0 ? -1 : todoList[len - 1].id;

        const newTodoList = [
            ...todoList,
            {
                id: lastId + 1,
                content: input,
                date: selectedDate,
                isSuccess: false,
            }
        ]
    }

    const removeTodo = (todoId) => {
        const newTodoList = todoList.filter(todo => todo.id !== todoId);
        setTodoList(newTodoList);
    }

    const toggleTodo = (todoId) => {
        const newTodoList = todoList.map(todo => {
            if (todo.id !== todoId) return todo;
               return {
                ...todo,
                isSuccess: !todo.isSuccess,
            }
        });
        setTodoList(newTodoList);
    }

    return {
        todoList,
        addTodo,
        removeTodo,
        toggleTodo,
        input,
        setInput,
    }
}