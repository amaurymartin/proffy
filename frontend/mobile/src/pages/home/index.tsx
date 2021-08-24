/* eslint-disable import/no-unresolved */
import React from 'react'

import { Image, View } from 'react-native'

import homeImg from '../../assets/images/home.png'

import styles from './styles'

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={homeImg} />
    </View>
  )
}
