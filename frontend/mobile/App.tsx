/* eslint-disable react/style-prop-object */
import React from 'react'

import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading';

// eslint-disable-next-line camelcase
import { useFonts, Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo'
// eslint-disable-next-line camelcase
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import Home from './src/pages/home'

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular, Archivo_700Bold, Poppins_400Regular, Poppins_600SemiBold
  })

  if(!fontsLoaded) return <AppLoading />

  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  )
}
