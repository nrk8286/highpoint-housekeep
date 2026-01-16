
import { Stack } from "expo-router";
import { Colors } from '../constants/Colors';

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: Colors.text,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="index" options={{ title: "Select Side" }} />
      <Stack.Screen name="SelectRoom" options={{ title: "Select Room" }} />
      <Stack.Screen name="TaskChecklist" options={{ title: "Task Checklist" }} />
      <Stack.Screen name="login" options={{ title: "Admin Login" }} />
      <Stack.Screen name="admin" options={{ title: "Admin Dashboard" }} />
      <Stack.Screen name="settings" options={{ title: "Settings" }} />
      <Stack.Screen name="add-request" options={{ title: "Add Request" }} />
      <Stack.Screen name="MaintenanceList" options={{ title: "Maintenance Requests" }} />
      <Stack.Screen name="MaintenanceRequest" options={{ title: "Maintenance Request Details" }} />
    </Stack>
  );
}
