import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{headerShown:false}}>
        <Drawer.Screen name='dashboard' />
        <Drawer.Screen name='feedbacks' />
        <Drawer.Screen name='payments' />
        <Drawer.Screen name='notifications' />
        <Drawer.Screen name='profile' />
        <Drawer.Screen name='supports' />
        <Drawer.Screen name='tripdetails' />
        <Drawer.Screen name='messages' />
      </Drawer>
    </GestureHandlerRootView>
  );
}