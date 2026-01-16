import { Stack } from "expo-router";
import SelectSideScreen from "../screens/SelectSideScreen";
import SelectRoomScreen from "../screens/SelectRoomScreen";
import TaskChecklistScreen from "../screens/TaskChecklistScreen";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Select Side" }} />
      <Stack.Screen name="SelectRoom" options={{ title: "Select Room" }} />
      <Stack.Screen name="TaskChecklist" options={{ title: "Task Checklist" }} />
    </Stack>
  );
}
