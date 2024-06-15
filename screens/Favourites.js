import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { FavouritesContext } from '../store/context/favourites-context'
import { useSelector } from 'react-redux'
import { MEALS } from '../data/dummy-data'
import MealList from '../components/MealsList/MealList'
const Favourites = () => {

  // const favouriteMealCtx = useContext(FavouritesContext)
  const favouriteMeals = useSelector((state)=> state.favouritesMeals.ids)

  const favouriteMealsArray = MEALS.filter(meal => favouriteMeals.includes(meal.id))


  if(favouriteMealsArray.length === 0){
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no Favourite meals here</Text>
    </View>
  }
  return (
    <MealList displayedMeals={favouriteMealsArray}/>
  )
}

export default Favourites

const styles = StyleSheet.create({
    rootContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
      fontSize:20,
      fontWeight:'bold',
      color:'white'
    }
})
