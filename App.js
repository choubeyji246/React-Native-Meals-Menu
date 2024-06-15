import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import CategoriesScreen from './screens/CategoriesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealItemDetailsScreen from './screens/MealItemDetailsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Favourites from './screens/Favourites';
import FavouritesContextProvider from './store/context/favourites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle:{backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor:'#351401',
        drawerActiveBackgroundColor:'#e4baa1'
      }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{title:"All Categories"}} />
      <Drawer.Screen name="Favourites" component={Favourites} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    // <FavouritesContextProvider>
    <Provider store={store}>
    <NavigationContainer>
      <stack.Navigator 
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: '#3f2f25'},
      }}
      >
        <stack.Screen
          name="MealsCategories"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        <stack.Screen name="MealsDetails" component={MealItemDetailsScreen} options={{title:'About The Meal'}} />
        {/* <View style={styles.container} >
    <CategoriesScreen />
    </View> */}
      </stack.Navigator>
    </NavigationContainer>
    </Provider>
    // </FavouritesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24180f',
  },
});
