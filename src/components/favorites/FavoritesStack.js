import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import FavoriteScreen from './FavoritesScreen';
import Colors from '../../res/colors'

const Stack = createStackNavigator()

const FavoriteStack = () => {
  return(
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowColor: Colors.blackPearl,
        },
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen component={FavoriteScreen} name="Favorites" />
    </Stack.Navigator>
  )
}

export default FavoriteStack