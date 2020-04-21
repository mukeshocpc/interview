import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/components/Home';
import Asteroid from './src/components/Asteroid';

const Stack = createStackNavigator();
console.disableYellowBox = true;

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Asteroid" component={Asteroid} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;