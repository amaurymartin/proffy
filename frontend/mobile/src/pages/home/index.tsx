/* eslint-disable import/no-unresolved */
import React from 'react'

import { Image, Text, TouchableOpacity, View } from 'react-native'

import homeImg from '../../assets/images/home.png'
import studyIcon from '../../assets/images/icons/study.png'
import teachIcon from '../../assets/images/icons/teach.png'
import heartIcon from '../../assets/images/icons/heart.png'

import styles from './styles'

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={homeImg} style={styles.banner} />

      <Text style={styles.title}>
        Welcome,{'\n'}
        <Text style={styles.titleBold}>What you need to do?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Study</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
          <Image source={teachIcon} />
          <Text style={styles.buttonText}>Teach</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.stats}>
        More than 420 people connected
        <Image source={heartIcon} style={styles.statsIcon} />
      </Text>
    </View>
  )
}
