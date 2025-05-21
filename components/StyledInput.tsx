import React, { useState } from "react";
import { TextInput, View, Text, TextInputProps } from "react-native";
// Assuming Colors and useColorScheme are for dynamic theming not directly handled by Tailwind here without config
// import Colors from "@/constants/Colors";
// import { useColorScheme } from "@/components/useColorScheme";

interface StyledInputProps extends TextInputProps {
  label?: string;
  error?: string;
  // className prop will be used by NativeWind if passed from parent
}

const StyledInput: React.FC<StyledInputProps> = ({
  label,
  error,
  className, // NativeWind uses className
  ...props
}) => {
  // const colorScheme = useColorScheme() ?? "light";
  // const themeColors = Colors[colorScheme];

  // Add state for focus
  const [isFocused, setIsFocused] = useState(false);
  
  // Base classes
  const inputBaseClasses = "border rounded-md px-4 py-3 text-base min-h-[48px]";
  
  // Dynamic classes based on error state only
  // Use primary color for borders by default
  let borderColorClass = "border-primary";
  
  // Only override with red if there's an error
  if (error) {
    borderColorClass = "border-red-500";
  }
  // Placeholder color can be set with placeholder:text-gray-500 for example
  // Text color can be text-black dark:text-white for example
  // Background color can be bg-white dark:bg-gray-800 for example

  return (
    <View className="mb-4">
      {/* Changed from marginBottom: 15 */}
      {label && (
        <Text className="mb-1 text-sm text-gray-700 dark:text-gray-300">
          {/* Changed from styles.label */}
          {label}
        </Text>
      )}
      <TextInput
        className={`${inputBaseClasses} ${borderColorClass} text-gray-900 dark:text-white bg-white dark:bg-gray-700 placeholder:text-gray-500 dark:placeholder:text-gray-400 ${
          className || ""
        }`}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus && props.onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur && props.onBlur(e);
        }}
        // placeholderTextColor prop might not be needed if using placeholder:text-* utility
        {...props}
      />
      {error && <Text className="mt-1 text-xs text-red-500">{error}</Text>}
      {/* Changed from styles.errorText */}
    </View>
  );
};

export default StyledInput;
