import React from 'react'
import { Image, Linking, Text, View } from 'react-native'

import PropTypes from 'prop-types'

import { RectButton } from 'react-native-gesture-handler'

import heartOulineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

type EducatorProps = {
  educator: {
    key: string
    avatar: string
    name: string
    bio: string
    email: string
    whatsapp: string
  }
  klassSubject: string
  klassPrice: number
}

const Educator: React.FC<EducatorProps> = ({
  educator,
  klassSubject,
  klassPrice,
}) => (
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
      <Text style={styles.value}>U$D {klassPrice}</Text>

      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.favoriteButton, styles.favorited]}>
          <Image source={heartOulineIcon} />
        </RectButton>
        <RectButton
          style={styles.whatsappButton}
          onPress={() =>
            Linking.openURL(`https://wa.me/55${educator.whatsapp}`)
          }
        >
          <Image source={whatsappIcon} />
          <Text style={styles.whatsappButtonText}>Contact</Text>
        </RectButton>
      </View>
    </View>
  </View>
)

Educator.propTypes = {
  educator: PropTypes.shape({
    key: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    whatsapp: PropTypes.string.isRequired,
  }).isRequired,
  klassSubject: PropTypes.string.isRequired,
  klassPrice: PropTypes.number.isRequired,
}

export default Educator
