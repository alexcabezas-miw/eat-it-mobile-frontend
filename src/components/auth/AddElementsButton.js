import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function BackButton({ onTouch, label }) {
  return (
    <View style={styles.addLabel} onStartShouldSetResponder={onTouch}>
        <Text style={styles.addLabelText}>➕ {label}</Text>
    </View>
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