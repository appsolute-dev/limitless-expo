import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { DrawerActions } from "@react-navigation/native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="meal-plan"
        options={({ navigation }) => ({
          title: "Meal Plan",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="restaurant-outline" color={color} />
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={{ marginLeft: 15 }}
            >
              <Ionicons
                name="menu-outline"
                size={30}
                color={Colors[colorScheme ?? "light"].text}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="information-circle-outline"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        })}
      />
      <Tabs.Screen
        name="workouts"
        options={{
          title: "Workouts",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="barbell-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "LMTLSS",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="flame-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="macros"
        options={{
          title: "Macros",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="pie-chart-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: "Progress",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="stats-chart-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
