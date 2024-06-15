import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MealDetails from './MealDetails';

const MealItem = props => {
  const {id,title, imageUrl, duration, complexity, affordability} = props;

  const navigation = useNavigation()
    const pressHandler = ()=>{
        navigation.navigate('MealsDetails',{
            mealId:id
        })
    }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        onPress={pressHandler}
        >
        <View>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={[styles.title, styles.text]}>{title}</Text>
        </View>
        <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
  },
  text: {
    color: 'black',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
