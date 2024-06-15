import React from 'react'
import { Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


const IconButton = ({onPress, isMealFavourite}) => {
  return (
    <Pressable onPress={onPress} android_ripple={{color:'#ccc'}}>
        <Icon name="star" size={30} color= {isMealFavourite ? "red" : "#FFD700" }/>
    </Pressable>
  )
}

export default IconButton
