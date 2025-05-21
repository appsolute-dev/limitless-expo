import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import StyledInput from "@/components/StyledInput"; // Assuming you have a StyledInput component
import StyledButton from "@/components/StyledButton"; // Assuming you have a StyledButton component

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePasswordReset = async () => {
    // Custom alert button
    const primaryButton = [
      {
        text: "OK",
        onPress: () => {}
      }
    ];
    
    // Unfortunately, React Native Alert doesn't allow customizing button colors on all platforms
    // The primary color will be applied automatically on iOS, but not on Android
    
    // Check if email is provided
    if (!email) {
      Alert.alert(
        "Reset Password Error", 
        "Please enter an email address.",
        primaryButton
      );
      return;
    }
    
    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert(
        "Reset Password Error", 
        "Please enter a valid email address.",
        primaryButton
      );
      return;
    }
    
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);

    // Replace with your actual password reset logic (e.g., API call to Firebase, Supabase, etc.)
    Alert.alert(
      "Password Reset",
      `If an account exists for ${email}, a password reset link has been sent.`,
      primaryButton
    );
    // Optionally navigate back to login or a confirmation screen
    // router.push('/login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 justify-center bg-white dark:bg-gray-900"
    >
      <View className="p-8 w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg">
        <Text className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">
          Forgot Password?
        </Text>
        <Text className="text-md text-center mb-8 text-gray-600 dark:text-gray-400">
          Enter your email to receive a reset link.
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
          returnKeyType="done"
          onSubmitEditing={handlePasswordReset}
        />

        <StyledButton
          title="Send Reset Link"
          onPress={handlePasswordReset}
          loading={loading}
          disabled={loading}
          buttonClassName="w-full mt-6"
        />

        <View className="mt-4 flex-row justify-center">
          <Pressable onPress={() => router.push("/login")}>
            <Text className="text-sm text-primary dark:text-primary">
              Back to Login
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
