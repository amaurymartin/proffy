import React from 'react'

import { View } from 'react-native'

import Header from '../../../../components/header'

import styles from './styles'

export default function EducatorsIndexFavorites(): JSX.Element {
  return (
    <View style={styles.container}>
      <Header title="Favorites" />
    </View>
  )
}
