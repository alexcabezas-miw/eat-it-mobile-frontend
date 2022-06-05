import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import MainScreen from "./src/views/MainScreen";
import { ConfirmProvider } from 'react-native-confirm-dialog'


export default function App() {
  return (
    <ConfirmProvider>
      <NativeBaseProvider>
        <MainScreen />
      </NativeBaseProvider>
    </ConfirmProvider>
  );
}