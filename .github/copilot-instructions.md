# HighPoint Housekeeping - AI Agent Instructions

## Project Overview

**HighPoint Housekeeping** is a React Native/Expo-based mobile app for managing household cleaning and maintenance tasks. It tracks task completion by housekeepers and maintenance requests for residential properties.

## Architecture

### Tech Stack
- **Framework**: Expo + React Native (mobile and web)
- **Routing**: Expo Router (file-based routing in `/app`)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: React Native StyleSheet
- **Data**: In-memory mock data (no backend currently)

### Key Domains

1. **Housekeeping Tasks** (`Task` interface in [types/Task.ts](types/Task.ts))
   - Three categories: `housekeeping`, `maintenance`, `audit`
   - Subcategories: `standard` or `deep` cleaning
   - Frequency: daily, monthly, or as-needed
   - Tasks include estimated time and room-specific requirements

2. **Rooms** (`Room` interface in [types/Room.ts](types/Room.ts))
   - Organized by building side (A, B, C, D)
   - Types: `room`, `bathroom`, `common area`
   - Each has number/name and optional notes

3. **Housekeepers** (`Housekeeper` interface in [types/Housekeeper.ts](types/Housekeeper.ts))
   - Simple identity with id and name
   - Currently hardcoded: Audrey (sides A, D) and Hannah Steele (sides B, C)
   - Assigned to specific building sides

4. **Completion Logs** (`CompletionLog` in [types/CompletionLog.ts](types/CompletionLog.ts))
   - Records completed tasks with housekeeper, room, timestamp, and task type
   - Uses UUID for unique IDs
   - Currently stored in memory at [data/completion-logs.ts](data/completion-logs.ts)

### Navigation Flow

File-based routing structure in [app/_layout.tsx](app/_layout.tsx):
- `/` (index) → Side selection
- `/SelectRoom` → Room selection for chosen side
- `/TaskChecklist` → Task checking UI with completion logging
- `/login` → Housekeeper authentication
- `/admin` → Admin dashboard
- `/MaintenanceList` → View maintenance requests
- `/MaintenanceRequest` → Request details
- `/add-request`, `/settings` → Secondary screens

**Parameter Passing Pattern**: Navigation passes serialized JSON objects as route params:
```tsx
// Example: passing room + housekeeper to TaskChecklist
router.push({ 
  pathname: '/TaskChecklist', 
  params: { 
    room: JSON.stringify(room),
    housekeeper: JSON.stringify(housekeeper) 
  } 
});
```

## Critical Patterns & Conventions

### Data Structure
- **Single Source**: Each data type (tasks, rooms, housekeepers) has one file in `/data`
- **Type Safety**: Corresponding TypeScript interfaces in `/types` with re-exports in [types/index.ts](types/index.ts)
- **Mock Data**: All data is arrays of objects in memory—no API calls (yet)

### Component Patterns
- **Screen Components**: Functional components in `/app` directory using hooks
- **Route Params**: Always parse stringified JSON: `JSON.parse(roomString as string)`
- **State Management**: Local useState for UI state; completion logs pushed directly to array
- **Colors**: All colors from centralized [constants/Colors.ts](constants/Colors.ts)—black/white/gold theme

### Screen Implementation Checklist
- Import types and data from correct paths: `import { Room } from '../types/Room'`
- Use [Colors](constants/Colors.ts) export for all styling
- Parse route params safely with type assertions
- Use FlatList for rendering arrays
- Include back/cancel navigation options

### Task Completion Workflow
[app/TaskChecklist.tsx](app/TaskChecklist.tsx) exemplifies the pattern:
1. Filter tasks by subCategory (`standard` or `deep`)
2. Track completed task IDs in state
3. Create CompletionLog with UUID on save
4. Push to completion-logs array (acts as database)

## Development Workflows

### Running the App
```bash
npm start          # Start Expo dev server
npm run android    # Android emulator
npm run ios        # iOS simulator
npm run web        # Web browser (port 8082)
```

### Code Quality
```bash
npm run lint       # ESLint check (Expo flat config)
```

### Building
- Standard Expo commands apply (eas build, eas submit)
- IDX environment: Android task auto-starts on workspace load

### Testing Strategy
- No test files currently—write tests if adding critical business logic
- Use Expo Go for quick dev testing

## Important Implementation Notes

1. **No Backend**: All data is in-memory mock arrays. When persisting beyond session, will need AsyncStorage or backend API.

2. **Housekeeper Assignment is Hardcoded**: Update [data/housekeepers.ts](data/housekeepers.ts) and index.tsx logic when adding housekeepers.

3. **UUID Generation**: Import `import { v4 as uuidv4 } from 'uuid'` for unique IDs (used in completion logs).

4. **Type Assertions**: Route params lack type info—always use `as string` when parsing: `JSON.parse(roomString as string)`.

5. **Colors Theme**: Gold accent (#D4AF37) on black/white for premium branding—maintain in all new screens.

## When Adding Features

- **New Task Type**: Update `Task` interface category/subCategory; add data to [data/tasks.ts](data/tasks.ts)
- **New Screen**: Create .tsx file in `/app`, add Stack.Screen in [_layout.tsx](app/_layout.tsx), follow route param patterns
- **New Domain Object**: Create Type in `/types`, data in `/data`, re-export in both index.ts files
- **Persistence**: Replace array mutations in data files with AsyncStorage or API calls

## File Reference Map

| Path | Purpose |
|------|---------|
| `app/` | Expo Router screen components (file-based routing) |
| `types/` | TypeScript interfaces for domain objects |
| `data/` | Mock data and future data source layer |
| `constants/Colors.ts` | Centralized color palette |
| `assets/images/` | Logo and media files |
| `app/_layout.tsx` | Route config and header styling |

## Key Dependencies to Know

- **@react-navigation/***: Screen navigation and bottom tabs
- **expo-camera, expo-image-picker**: Media capture (permissions in app.json)
- **uuid**: Unique ID generation for logs
- **react-native-reanimated, victory-native**: Future analytics visualization
