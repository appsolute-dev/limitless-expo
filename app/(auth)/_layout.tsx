import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function AuthLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Stack 
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#2DC7EA',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#2DC7EA',
        },
        headerShadowVisible: false,
        // Use a simpler approach with animation options
        animation: 'slide_from_right',
        headerBackVisible: true,
      }}
      initialRouteName="login"
    >
      <Stack.Screen 
        name="login" 
        options={{ 
          title: "Sign In",
          headerShown: false // Hide header on login screen
        }} 
      />
      {/* You can add other auth screens here later, e.g.: */}
      {/* <Stack.Screen name="signup" /> */}
      <Stack.Screen 
        name="forgot-password" 
        options={{ 
          title: "Reset Password",
        }} 
      />
    </Stack>
  );
}
