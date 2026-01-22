Welcome to HighPoint Housekeep! This document provides a guide for using the Copilot coding agent within this repository. Please review it before starting work.

## About the Project

HighPoint Housekeep is an Expo Router/React Native application that streamlines housekeeping and maintenance tasks (room selection, requests, checklists, and admin management). The app is built with Expo, React Native, and TypeScript, and uses ESLint for linting.

## Tech Stack

- **Framework:** Expo SDK ~54.0 with Expo Router for file-based routing
- **Language:** TypeScript with strict mode enabled
- **UI:** React Native with StyleSheet API
- **State Management:** React hooks (useState, useEffect) and Expo Router params
- **Navigation:** Expo Router (file-based routing in `/app` directory)
- **Styling:** Centralized color constants in `/constants/Colors.ts`
- **Linting:** ESLint with expo config

## Getting Started

To get the project running locally, follow these steps:

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server with Expo:**

   The interactive Expo dev server lets you choose the target platform.

   ```bash
   npm start
   ```

   Helpful platform-specific scripts:

   * **Android (starts Expo dev server targeting Android):**

     ```bash
     npm run android
     ```

   * **iOS (starts Expo dev server targeting iOS):**

     ```bash
     npm run ios
     ```

   * **Web preview (port 8082):**

     ```bash
     npm run web
     ```

3. **Lint the project:**

   ```bash
   npm run lint
   ```

## Project Structure

```
/app                  - Expo Router screens (file-based routing)
/constants            - App-wide constants (Colors, etc.)
/types                - TypeScript type definitions
/data                 - Static data files
/assets               - Images and other static assets
/public               - Static files for web deployment
```

## Code Style and Conventions

### TypeScript
- **Always use strict TypeScript:** Strict mode is enabled in tsconfig.json
- **Use explicit types:** Define interfaces for all data structures in `/types`
- **Export types:** Use named exports (e.g., `export interface Housekeeper`)
- **No `any` type:** Avoid using `any`; prefer specific types or `unknown` if necessary

### React/React Native
- **Functional components only:** Use functional components with hooks
- **Component naming:** Use PascalCase and append "Screen" suffix for route components (e.g., `SelectRoomScreen`)
- **Props typing:** Always type component props using TypeScript interfaces
- **StyleSheet API:** Use `StyleSheet.create()` for all component styles
- **Colors:** Always import and use colors from `/constants/Colors.ts`
- **Expo Router:** Use `useRouter()` for navigation and `useLocalSearchParams()` for route params

### File Organization
- **Screen files:** Place in `/app` directory following Expo Router conventions
- **Types:** Define in `/types` directory with descriptive names
- **Data:** Static data goes in `/data` directory
- **Constants:** Global constants in `/constants` directory

### Styling Conventions
- Use `StyleSheet.create()` at the bottom of each component file
- Style object names should be descriptive (e.g., `container`, `welcomeText`, `buttonWrapper`)
- Always reference `Colors` constant instead of hardcoding color values
- Use consistent spacing and padding values

### Example Component Structure
```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const ExampleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Example</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text,
  },
});

export default ExampleScreen;
```

## Testing

Currently, this project does not have a test infrastructure set up. When adding features:
- Focus on code quality and TypeScript type safety
- Manual testing is expected for now
- If adding tests in the future, follow React Native Testing Library conventions

## Deployment

This project can be deployed to Cloudflare Pages for web builds:

1. **Build for web:**
   ```bash
   npm run build:web
   ```

2. **Deploy to Cloudflare Pages:**
   See [DEPLOYMENT.md](../DEPLOYMENT.md) for complete deployment instructions

## Important Guidelines

- **Do not modify:** Avoid changes to `/public/_headers`, `/public/_redirects`, or `wrangler.toml` unless specifically needed
- **Type safety:** Always prioritize TypeScript type safety
- **Expo compatibility:** Ensure all changes are compatible with Expo and React Native
- **Web support:** Consider web platform compatibility when adding features
- **Minimal changes:** Make the smallest possible changes to accomplish the goal
