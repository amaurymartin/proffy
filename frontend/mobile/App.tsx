/* eslint-disable react/style-prop-object */
import React from 'react'

import { StatusBar } from 'expo-status-bar'

import Home from './src/pages/home'

export default function App(): JSX.Element {
  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  )
}
