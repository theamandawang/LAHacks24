import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import OnboardingScreen from './components/OnboardingScreen';
import FrontScreen from './components/FrontScreen'; 
import ExercisesScreen from './components/ExercisesScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
                <Stack.Screen 
                  name="Welcome" 
                  component={FrontScreen} />
                <Stack.Screen
                    name="Onboarding"
                    component={OnboardingScreen}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
}