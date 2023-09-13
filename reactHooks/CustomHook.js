import React, { useState } from 'react'
import { Button, TextInput, View } from 'react-native'

const InputBox =(props) => (
    <View style={{flexDirection: 'row'}}>
            <TextInput
            value={props.value}
            onChange={props.onChangeText}
            style={{ borderBottomWidth: 1, width: 100 }}
            placeholder={props.placeholder}/>
            <Button title='초기화' onPress={props.onReset} />
    </View>
)

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const resetValue = () => setValue(initialValue);
    
    return {
        value,
        setValue,
        resetValue
    };
};

const CustomHook = () => {
    // const output = useInput('');
    // const name = output.value;
    // const setName = output.setValue;
    // const resetName = output.resetValue;

    const {
        value: name,
        setValue: setName,
        resetValue: resetName}
     = useInput('');
    const {
        value: age,
        setValue: setAge,
        resetValue: resetAge}
     = useInput('');
    const {
        value: city,
        setValue: setCity,
        resetValue: resetCity}
     = useInput('');
    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    // const [city, setCity] = useState('');

    return (
        <View>
            <InputBox
                value={name}
                onChangeText={setName}
                placeholder='Your name'
                onReset={resetName} />
            <InputBox
                value={age}
                onChangeText={setAge}
                placeholder='Your age'
                onReset={resetAge} />
            <InputBox
                value={city}
                onChangeText={setCity}
                placeholder='Your city'
                onReset={resetCity} />
        </View>
    );
};
export default CustomHook;