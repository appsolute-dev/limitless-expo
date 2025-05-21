import React from "react";
import {
  Pressable,
  Text,
  ActivityIndicator,
  PressableProps,
  ViewStyle,
  TextStyle,
} from "react-native";

interface StyledButtonProps extends PressableProps {
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
    "py-3 px-6 rounded-full flex-row justify-center items-center ";
  let baseTextClasses = "text-base font-semibold ";

  const disabledOrLoading = disabled || loading;

  if (disabledOrLoading) {
    baseButtonClasses += "bg-gray-400 dark:bg-gray-600 ";
    baseTextClasses += "text-gray-600 dark:text-gray-400 ";
  } else {
    switch (variant) {
      case "secondary":
        baseButtonClasses += "bg-primary hover:bg-primary/90 ";
        baseTextClasses += "text-white ";
        break;
      case "outline":
        baseButtonClasses += "border border-primary hover:bg-primary/10 ";
        baseTextClasses += "text-primary ";
        break;
      case "primary":
      default:
        baseButtonClasses += "bg-primary hover:bg-primary/90 ";
        baseTextClasses += "text-white ";
        break;
    }
  }

  return (
    <Pressable
      className={`${baseButtonClasses} ${
        disabledOrLoading ? "opacity-70" : ""
      } ${buttonClassName}`.trim()}
      disabled={disabledOrLoading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={
            variant === "outline" && !disabledOrLoading ? "#2DC7EA" : "#ffffff"
          }
          size="small"
        />
      ) : (
        <Text className={`${baseTextClasses} ${textClassName}`.trim()}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default StyledButton;
