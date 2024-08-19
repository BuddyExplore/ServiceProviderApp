import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileLayout() {
  return (
    <Stack
    initialRouteName='Support'
      screenOptions={{
        headerShown:true,
        headerBackButtonMenuEnabled:true,
        headerShown:false,
      }}>  
      <Stack.Screen name='Support' options={{}} />
    </Stack>
  );
}
