import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import StyledInput from "@/components/StyledInput"; // Assuming path is correct
import StyledButton from "@/components/StyledButton"; // Assuming path is correct
// If you have a logo or specific layout components, import them here
// import Logo from '@/components/Logo';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    // Sequential validation - check email first, then password
    
    // Check if email is provided
    if (!email) {
      Alert.alert("Login Error", "Please enter an email address.");
      return;
    } 
    
    // Check email format
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Login Error", "Please enter a valid email address.");
      return;
    }
    
    // Check if password is provided
    if (!password) {
      Alert.alert("Login Error", "Please enter a password.");
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);

    // Replace with your actual login logic
    if (email === "test@example.com" && password === "password") {
      Alert.alert("Login Successful", "Welcome back!");
      // Navigate to your main app screen, e.g., home or dashboard
      // router.replace('/(drawer)/(tabs)/meal-plan'); // Or wherever your main screen is
      router.replace("/"); // Or your main app entry point after login
    } else {
      Alert.alert("Login Failed", "Invalid email or password.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 justify-center bg-white dark:bg-gray-900"
    >
      <View className="p-8 w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg">
        {/* <Logo className="mb-8 self-center" /> */}
        <Text className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">
          Welcome Back!
        </Text>
        <Text className="text-md text-center mb-8 text-gray-600 dark:text-gray-400">
          Sign in to continue
        </Text>

        <StyledInput
          label="Email Address"
          placeholder="you@example.com"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View className="relative mb-4">
          {/* Label */}
          <Text className="mb-1 text-sm text-gray-700 dark:text-gray-300">
            Password
          </Text>
          
          {/* Input with icon */}
          <View className="relative">
            <TextInput
              className="border rounded-md px-4 py-3 pr-12 text-base min-h-[48px] border-primary text-gray-900 dark:text-white bg-white dark:bg-gray-700"
              placeholder="••••••••"
              placeholderTextColor="#9ca3af"
              value={password}
              onChangeText={(text: string) => {
                setPassword(text);
              }}
              secureTextEntry={!showPassword}
            />
            
            <Pressable
              className="absolute right-3 top-0 bottom-0 flex items-center justify-center w-10"
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#2DC7EA"
              />
            </Pressable>
          </View>
          
          {/* No error message shown - using alerts instead */}
        </View>

        <StyledButton
          title="Login"
          onPress={handleLogin}
          loading={loading}
          disabled={loading}
          buttonClassName="w-full"
        />

        <View className="mt-4 flex-row justify-center">
          <Pressable onPress={() => router.push("/forgot-password")}>
            <Text className="text-sm text-primary dark:text-primary">
              Forgot Password?
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
