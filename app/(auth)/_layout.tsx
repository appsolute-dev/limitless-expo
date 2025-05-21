import { Stack, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AuthLayout() {
  const router = useRouter();
  
  // Custom back button component
  const CustomBackButton = () => (
    <TouchableOpacity 
      onPress={() => router.back()}
      style={{ marginLeft: 8 }}
    >
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
  
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#2DC7EA", // Use primary color #2DC7EA for back button and title
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShadowVisible: false,
        // No special options needed, React Navigation will use the headerTintColor
        // for the back button color which will be #2DC7EA
      }}
      initialRouteName="login"
    >
      <Stack.Screen
        name="login"
        options={{
          title: "Sign In",
          headerShown: false, // Hide header on login screen
        }}
      />
      {/* You can add other auth screens here later, e.g.: */}
      {/* <Stack.Screen name="signup" /> */}
      <Stack.Screen
        name="forgot-password"
        options={{
          title: "",
          headerLeft: () => <CustomBackButton />,
        }}
      />
    </Stack>
  );
}
