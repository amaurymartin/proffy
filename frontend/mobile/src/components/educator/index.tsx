import React from 'react'
import { Image, Text, View } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'

import heartOulineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

export default function Educator(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.educator}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/23739035?v=4',
          }}
        />

        <View style={styles.info}>
          <Text style={styles.name}>Educator Test</Text>
          <Text style={styles.subject}>Class subject</Text>
        </View>
      </View>

      <Text style={styles.bio}>Educators bio</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>Price per hour</Text>
        <Text style={styles.value}>U$D 4.20</Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            <Image source={heartOulineIcon} />
          </RectButton>
          <RectButton style={styles.whatsappButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.whatsappButtonText}>Contact</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}
