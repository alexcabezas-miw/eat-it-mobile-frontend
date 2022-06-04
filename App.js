import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import MainScreen from "./src/views/MainScreen";


export default function App() {
  return (
    <NativeBaseProvider>
      <MainScreen />
    </NativeBaseProvider>
  );
}