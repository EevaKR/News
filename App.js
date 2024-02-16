import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import News from './screens/News';
import Details from './components/Details'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="News">
        <Stack.Screen
          name="News"
          component={News}
          options={{
            title: "News",
            headerTitle: "News",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Details",
            headerTitle: "Details",
          }}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
