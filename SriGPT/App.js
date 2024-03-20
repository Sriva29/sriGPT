import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import About from './About';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2b2a41',
            shadowOpacity: 0,
            elevation: 0,
            borderBottomColor: 'transparent',
            borderBottomWidth: 0,
          },
          headerTintColor: '#8fd88b',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: "",
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
