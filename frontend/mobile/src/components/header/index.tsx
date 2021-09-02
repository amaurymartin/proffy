import React, { ReactNode } from 'react'

import PropTypes from 'prop-types'

import { Image, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { BorderlessButton } from 'react-native-gesture-handler'

import HeaderProps from '../../@types/props/header'
import { Pages } from '../../pages/pages'

import logoImg from '../../assets/images/logo.png'
import backIcon from '../../assets/images/icons/back.png'

import styles from './styles'

const Header: React.FC<HeaderProps> = ({ title, icon, children }) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<Pages>>()

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={() => navigate('Home')}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </View>

      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
        {icon}
      </View>

      {children}
    </View>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  children: PropTypes.node,
}

Header.defaultProps = {
  icon: null,
  children: null,
}

export default Header
