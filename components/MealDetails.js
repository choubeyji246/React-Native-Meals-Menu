import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, styles.text]}>{duration}m</Text>
      <Text style={[styles.detailItem, styles.text]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, styles.text]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
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
  text:{
    color:'green'
  }
});
