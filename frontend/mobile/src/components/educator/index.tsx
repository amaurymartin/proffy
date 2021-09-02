import React, { useState } from 'react'
import { Image, Linking, Text, View } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'

import PropTypes from 'prop-types'

import EducatorProps from '../../@types/props/educator'

import heartOulineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'
import api from '../../services/api'

const Educator: React.FC<EducatorProps> = ({
  educator,
  isFavorite,
  klassKey,
  klassSubject,
  klassPrice,
}) => {
  const [favorited, setFavorited] = useState(isFavorite)

  async function favorite() {
    const unparsedFavorites = await AsyncStorage.getItem('favorites')
    let favorites: EducatorProps[] = unparsedFavorites
      ? JSON.parse(unparsedFavorites)
      : []

    if (favorited) {
      favorites = favorites.filter((fav) => fav.educator.key !== educator.key)
    } else {
      favorites.push({
        educator,
        isFavorite: !favorited,
        klassKey,
        klassSubject,
        klassPrice,
      })
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favorites))
    setFavorited(!favorited)
  }

  async function scheduleClass() {
    // TODO: Should this const be an env?
    const acceptedClassStatus = 1

    const payload = {
      klass: {
        key: 'status',
        value: acceptedClassStatus,
      },
    }

    await api
      .patch(`classes/${klassKey}`, payload)
      .then(() => {
        // eslint-disable-next-line no-alert
        alert('Class schedule successfully')
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Error on scheduling the class. Try again later')
      })
      .finally(() => Linking.openURL(`https://wa.me/55${educator.whatsapp}`))
  }

  return (
    <View style={styles.container}>
      <View style={styles.educator}>
        <Image
          style={styles.avatar}
          source={{
            uri: educator.avatar,
          }}
        />

        <View style={styles.info}>
          <Text style={styles.name}>{educator.name}</Text>
          <Text style={styles.subject}>{klassSubject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{educator.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>Price per hour</Text>
        <Text style={styles.value}>{`U$D ${Number(klassPrice)}`}</Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            style={[styles.favoriteButton, favorited ? styles.favorited : {}]}
            onPress={() => favorite()}
          >
            {favorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOulineIcon} />
            )}
          </RectButton>
          <RectButton
            style={styles.whatsappButton}
            onPress={() => scheduleClass()}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.whatsappButtonText}>Contact</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

Educator.propTypes = {
  educator: PropTypes.shape({
    key: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    whatsapp: PropTypes.string.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  klassKey: PropTypes.string.isRequired,
  klassSubject: PropTypes.string.isRequired,
  klassPrice: PropTypes.number.isRequired,
}

export default Educator
