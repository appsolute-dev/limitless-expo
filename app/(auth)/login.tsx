import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
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
  const router = useRouter();

  const handleLogin = async () => {
    let valid = true;
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    }
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }
    if (!valid) return;

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
      setPasswordError("Invalid email or password.");
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
            if (emailError) setEmailError("");
          }}
          keyboardType="email-address"
          autoCapitalize="none"
          error={emailError}
        />

        <StyledInput
          label="Password"
          placeholder="••••••••"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (passwordError) setPasswordError("");
          }}
          secureTextEntry
          error={passwordError}
        />

        <StyledButton
          title="Sign In"
          onPress={handleLogin}
          loading={loading}
          disabled={loading}
          buttonClassName="w-full"
        />

        <View className="mt-4 flex-row justify-center">
          <TouchableOpacity onPress={() => router.push('/(auth)/forgot-password')}>
            <Text className="text-sm text-blue-500 dark:text-blue-400 hover:underline">
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-6 flex-row justify-center">
          <Text className="text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
          </Text>
          <Link href="/signup" asChild>
            <Pressable>
              <Text className="font-semibold text-blue-500 hover:text-blue-600">
                Sign Up
              </Text>
            </Pressable>
          </Link>
        </View>

        <View className="mt-4 flex-row justify-center">
          <Link href="/forgot-password" asChild>
            <Pressable>
              <Text className="text-sm text-gray-500 hover:text-gray-600">
                Forgot Password?
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
