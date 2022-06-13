import React from 'react'
import { View, StyleSheet, Text } from 'react-native'


import RNPickerSelect from 'react-native-picker-select';

export default function ValuePicker({ containerStyle, error, ...props }) {
    return ( 
        <RNPickerSelect
            style={pickerSelectStyles}
            {...props}
        />
    );
  }
  
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 28,
        paddingHorizontal: 45,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        width: "100%",
        marginVertical: 14,
        flex: 1,
        backgroundColor: "white"
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 28,
        paddingHorizontal: 45,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        width: "100%",
        marginVertical: 14,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
  });