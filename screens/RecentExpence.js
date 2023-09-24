import { View, Text } from 'react-native'
import React from 'react'
import ExpenceOutput from '../components/ExpenceOutput/ExpenceOutput'

export default function RecentExpence() {
  return (
    <ExpenceOutput expencePeriod={'Last 7 Days'} />
  )
}