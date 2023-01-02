import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React, { createContext } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import {
  View,
  Text,

} from 'react-native'

const App = () => {


  return (

    <SafeAreaProvider>
      <View>
        <Text>Pico wallet</Text>
      </View>

    </SafeAreaProvider>

  )
}

export default App
