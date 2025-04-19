# Quizzoo App for Export.dev

This repository contains the optimized structure for building the Quizzoo App APK via Export.dev.

## Directory Structure

- `/app` - Main application screens using Expo Router
- `/assets` - Static assets for the app
  - `/animations` - Lottie JSON files
  - `/fonts` - Custom font files
  - `/images/buffalo` - App icons, splash screens, logos
  - `/questions/data` - JSON question data
  - `/sounds` - Game sound effects
- `/components` - Reusable UI components
  - `/ui` - General UI components
  - `/errors` - Error handling components
  - `/__tests__` - Component tests
- `/constants` - App constants and configuration
- `/database` - Database schema and scripts
- `/hooks` - Custom React hooks
- `/types` - TypeScript type definitions

## Before Building

1. Make sure all image assets referenced in app.json exist at the correct paths:
   - `assets/images/buffalo/icon.png`
   - `assets/images/buffalo/splash.png`
   - `assets/images/buffalo/adaptive-icon.png`
   - `assets/images/buffalo/favicon.png`
   - `assets/images/buffalo/notification-icon.png`

2. Create a `.env` file with your Supabase credentials based on `.env.example`

## Building with Export.dev

1. Connect your GitHub repo to Export.dev
2. Follow the guided setup process
3. Export.dev will build the APK

## Local Testing

To test locally before uploading to Export.dev:

```bash
# Install dependencies
npm install

# Run development server
npm start

# Build Android APK
eas build -p android --profile preview
```

## Additional Notes

This repository includes placeholders for critical files. Replace them with your actual assets before building.