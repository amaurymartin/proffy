import React, { useCallback, useEffect, useState } from 'react'

import { ScrollView, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import EducatorProps from '../../../../@types/props/educator'

import Header from '../../../../components/header'
import Educator from '../../../../components/educator'

import styles from './styles'

export default function EducatorsIndexFavorites(): JSX.Element {
  const [favorites, setFavorites] = useState<EducatorProps[]>([])

  useEffect(() => {
    getFavorites()
  }, [])

  useFocusEffect(
    useCallback(() => {
      getFavorites()
    }, [])
  )

  async function getFavorites() {
    await AsyncStorage.getItem('favorites')
      .then((response) => {
        if (response) setFavorites(JSON.parse(response) || [])
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Error on getting favorites')
      })
  }

  return (
    <View style={styles.container}>
      <Header title="Favorites" />

      <ScrollView
        style={styles.educators}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((favorite) => (
          <Educator
            key={favorite.educator.key}
            educator={favorite.educator}
            isFavorite={favorites
              .map((fav) => fav.educator.key)
              .includes(favorite.educator.key)}
            klassSubject={favorite.klassSubject}
            klassPrice={favorite.klassPrice}
          />
        ))}
      </ScrollView>
    </View>
  )
}
