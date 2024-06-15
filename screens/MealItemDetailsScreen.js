import {useContext, useLayoutEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native';

import List from '../components/MealDetails/List';
import Subtitle from '../components/MealDetails/Subtitlle';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummy-data';
import IconButton from '../components/IconButton';
import {FavouritesContext} from '../store/context/favourites-context';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavourite, addFavourite } from '../store/redux/favourites';

const MealItemDetailsScreen = ({route, navigation}) => {
  // const favouriteMealCtx = useContext(FavouritesContext);

  const favouriteMeals = useSelector((state)=> state.favouritesMeals.ids)
  const dispatch = useDispatch()
  // console.log(favouriteMealCtx.ids);
 console.log(favouriteMeals);
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const isMealFavourite = favouriteMeals.includes(mealId);


  function changeFavouriteButtonPressHandler() {
    if (isMealFavourite) {
      // favouriteMealCtx.removeFavourite(mealId);
      dispatch(removeFavourite({id: mealId}))
    } else {
      // favouriteMealCtx.addFavourite(mealId);
      dispatch(addFavourite({id: mealId}))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            isMealFavourite={isMealFavourite}
            onPress={changeFavouriteButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteButtonPressHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealItemDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
