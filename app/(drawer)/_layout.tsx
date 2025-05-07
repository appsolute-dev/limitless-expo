import React from "react";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveTintColor: Colors[colorScheme ?? "light"].tint,
          drawerInactiveTintColor: Colors[colorScheme ?? "light"].text,
          headerShown: false, // Default to no header for drawer screens, tabs will manage their own
        }}
      >
        <Drawer.Screen
          name="(tabs)" // This points to the app/(drawer)/(tabs) directory
          options={{
            title: "Home",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        {/* Example of another drawer item, ensure app/(drawer)/settings.tsx exists for this to work */}
        {/* <Drawer.Screen
          name="settings"
          options={{
            title: 'Settings',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        /> */}
      </Drawer>
    </GestureHandlerRootView>
  );
}
