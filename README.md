# Limitless Expo App

A mobile application built with Expo and React Native.

## Expo App Services Configuration

This project is configured to use Expo App Services (EAS) for builds and deployments.

### Setup Commands

```bash
# Initialize EAS configuration
eas build:configure

# Log in to your Expo account (if not already logged in)
eas login

# Configure EAS Update
eas update:configure

# Link your project to EAS
eas project:link
```

### Build Commands

```bash
# Development build (for testing)
eas build --profile development --platform ios
eas build --profile development --platform android

# Preview build (for internal testing)
eas build --profile preview --platform ios
eas build --profile preview --platform android
eas build --profile preview  # Build for both platforms

# Production build
eas build --profile production --platform ios
eas build --profile production --platform android
eas build --profile production  # Build for both platforms
```

### Over-the-Air Updates

The app is configured to use Expo's EAS Update for over-the-air updates. This allows you to push updates to your app without requiring a new build or app store submission.

```bash
# Create and push an update to the staging channel
eas update --branch staging

# Create and push an update to the production channel
eas update --branch production

# Create an update with a specific message
eas update --branch staging --message "Fixed login screen bugs"

# View your update history in the Expo dashboard
# https://expo.dev/accounts/limitless-training/projects/limitless/updates
```

### Submit to App Stores

```bash
# Submit to App Store
eas submit --platform ios

# Submit to Google Play
eas submit --platform android
```

### Organization Management

```bash
# View your accounts and organizations
eas account:view

# To specify an organization, update the "owner" field in app.json
# "expo": {
#   "owner": "your-organization-name",
#   ...
# }
```

## Environment Configuration

The app uses different configurations based on build profiles (development, preview, production) as defined in eas.json.

## Project Structure

- `/app`: Main application code
- `/assets`: Static assets (images, fonts, etc.)
- `app.json`: Expo configuration
- `eas.json`: EAS Build configuration
