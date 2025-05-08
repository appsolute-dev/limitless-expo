import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from "react-native";

interface StyledButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  variant?: "primary" | "secondary" | "outline"; // Add variants for different styles
  buttonClassName?: string; // For additional TouchableOpacity styling
  textClassName?: string; // For additional Text styling
}

const StyledButton: React.FC<StyledButtonProps> = ({
  title,
  loading = false,
  variant = "primary",
  buttonClassName = "",
  textClassName = "",
  disabled,
  ...props
}) => {
  let baseButtonClasses =
    "py-3 px-6 rounded-lg flex-row justify-center items-center ";
  let baseTextClasses = "text-base font-semibold ";

  if (disabled || loading) {
    baseButtonClasses += "bg-gray-400 dark:bg-gray-600 ";
    baseTextClasses += "text-gray-600 dark:text-gray-400 ";
  } else {
    switch (variant) {
      case "secondary":
        baseButtonClasses += "bg-purple-600 hover:bg-purple-700 ";
        baseTextClasses += "text-white ";
        break;
      case "outline":
        baseButtonClasses += "border border-blue-500 hover:bg-blue-50 ";
        baseTextClasses += "text-blue-500 ";
        break;
      case "primary":
      default:
        baseButtonClasses += "bg-blue-500 hover:bg-blue-600 ";
        baseTextClasses += "text-white ";
        break;
    }
  }

  return (
    <TouchableOpacity
      className={`${baseButtonClasses} ${buttonClassName}`.trim()}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "outline" ? "#3b82f6" : "#ffffff"}
          size="small"
        />
      ) : (
        <Text className={`${baseTextClasses} ${textClassName}`.trim()}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default StyledButton;
