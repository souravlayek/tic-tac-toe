import React,{useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
    const [inputValue, setInputValue] = useState('')
    const changeHandler = (text) => {
        props.value(text)
        setInputValue(text)
    }
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput style={styles.input}
                    placeholder={props.placeholder} 
                    onChangeText={(e)=>changeHandler(e)} value={inputValue} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "black",
        marginVertical: 10,
        fontSize: 18,
        padding: 5,
        paddingHorizontal: 10
    },
    inputContainer:{
        marginHorizontal: 5
    },
    label: {
        fontSize: 19,
        fontWeight: "bold"
    },
})

export default Input;
