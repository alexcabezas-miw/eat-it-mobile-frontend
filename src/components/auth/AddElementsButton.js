import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function BackButton({ width, onTouch, label }) {
  return (
    <TouchableOpacity onTouch={onTouch}>
      <View style={[styles.addLabel, width ? {maxWidth: width} : undefined]} onStartShouldSetResponder={onTouch}>
        <Text style={styles.addLabelText}>➕ {label}</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    addLabel: {
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderStyle: 'dashed',
      padding: 5,
      borderRadius: 10,
      maxWidth: "60%"
    },
    addLabelText: {
      fontSize: 15
    }
  })