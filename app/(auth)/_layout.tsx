import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      {/* You can add other auth screens here later, e.g.: */}
      {/* <Stack.Screen name="signup" /> */}
      {/* <Stack.Screen name="forgot-password" /> */}
    </Stack>
  );
}
