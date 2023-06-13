import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React, {ReactElement} from 'react';
import {Home} from '../pages';

// Creating a Drawer navigation

const Drawer = createDrawerNavigator();

// Creating a stack navigator
const Stack = createStackNavigator();
const MainStackNavigator = (): ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home">
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = (): ReactElement => {
  return (
    <Drawer.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      //   drawerContent={() => <DrawerContent />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        // drawerStyle: {width: menuDrawerWidth},
      }}
      initialRouteName="Main_Stack_Navigator">
      <Drawer.Screen
        name="Main_Stack_Navigator"
        component={MainStackNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
