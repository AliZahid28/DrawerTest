import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import Users from './screens/Users';
import Notes from './screens/Notes';
import { DataProvider } from './screens/useContext';


const Drawer = createDrawerNavigator();

const App = () => {

  return (
    <DataProvider>
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        drawerActiveTintColor: 'green'
      }} initialRouteName='home'>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notes" component={Notes} />
        <Drawer.Screen name="Users" component={Users} />
      </Drawer.Navigator>
    </NavigationContainer>
        </DataProvider>
  )
}

export default App

const styles = StyleSheet.create({})