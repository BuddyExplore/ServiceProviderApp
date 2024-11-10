import { Stack } from "expo-router";
import { View } from 'react-native';

export default function RootLayout() {

  return (
      <Stack screenOptions={{
        headerShadowVisible: false,
      }}>
        <Stack.Screen name="ShopManagerHome"/>
        <Stack.Screen name="Test1"/>

      </Stack>
  );
}

// 1. User Role Management
// After the user logs in, you can store their role (e.g., shopOwner, vehicleOwner, tourGuide) in localStorage, AsyncStorage, or context.
// Based on the role, you will conditionally render different screens for that user.
// 2. Structure with Stacks and Nested Folders in Expo Router
// You can absolutely use nested stacks within folders in Expo Router for different user roles. Here’s how you can do it:

// Folder Structure Example:
// text
// Copy code
// /app
//   ├── _layout.jsx (Root Layout for App)
//   ├── login.jsx
//   ├── userRoleContext.js (Context to store user role)
//   ├── ShopManager
//   │    ├── _layout.jsx (Stack for Shop Owner UI)
//   │    └── index.jsx (Shop Owner Main Screen)
//   ├── VehicleOwner
//   │    ├── _layout.jsx (Stack for Vehicle Owner UI)
//   │    └── index.jsx (Vehicle Owner Main Screen)
//   ├── TourGuide
//   │    ├── _layout.jsx (Stack for Tour Guide UI)
//   │    └── index.jsx (Tour Guide Main Screen)
// 3. Root Layout (_layout.jsx)
// In the root layout, you can check the user’s role (stored in context or localStorage) and dynamically render the relevant stack.

// jsx
// Copy code
// // _layout.jsx
// import { Stack } from 'expo-router';
// import { useContext } from 'react';
// import { UserRoleContext } from './userRoleContext';

// export default function Layout() {
//   const { role } = useContext(UserRoleContext); // Get the user role from context or AsyncStorage

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {/* Conditional Rendering Based on User Role */}
//       {role === 'shopOwner' && <Stack.Screen name="ShopManager" />}
//       {role === 'vehicleOwner' && <Stack.Screen name="VehicleOwner" />}
//       {role === 'tourGuide' && <Stack.Screen name="TourGuide" />}
//       {!role && <Stack.Screen name="login" />} {/* Show login screen if no role */}
//     </Stack>
//   );
// }
// 4. User Role Context (userRoleContext.js)
// This context manages the user’s role throughout the app.

// jsx
// Copy code
// // userRoleContext.js
// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { AsyncStorage } from 'react-native';

// const UserRoleContext = createContext();

// export const UserRoleProvider = ({ children }) => {
//   const [role, setRole] = useState(null);

//   useEffect(() => {
//     const fetchRole = async () => {
//       const storedRole = await AsyncStorage.getItem('userRole');
//       setRole(storedRole); // Set the role from AsyncStorage or wherever it's stored
//     };
//     fetchRole();
//   }, []);

//   return (
//     <UserRoleContext.Provider value={{ role, setRole }}>
//       {children}
//     </UserRoleContext.Provider>
//   );
// };

// export const useUserRole = () => useContext(UserRoleContext);
// 5. Role-Based Screens (index.jsx per role)
// For each user role (e.g., ShopManager, VehicleOwner), you can have specific screens and layouts. For example, for ShopManager:

// jsx
// Copy code
// // ShopManager/index.jsx
// import { Text, View } from 'react-native';

// export default function ShopManagerScreen() {
//   return (
//     <View>
//       <Text>Welcome, Shop Owner!</Text>
//       {/* Render UI specific to shop owners */}
//     </View>
//   );
// }
// Similarly, for VehicleOwner or TourGuide, you will create respective index.jsx files to handle their UI.

// 6. Handling Login
// After login, you can save the user’s role in AsyncStorage or a Context and redirect them based on their role.

// jsx
// Copy code
// // login.jsx (after successful login)
// import { useUserRole } from './userRoleContext';
// import { AsyncStorage } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function Login() {
//   const { setRole } = useUserRole();
//   const router = useRouter();

//   const handleLogin = async () => {
//     // Assume we got the role from the backend after login
//     const userRole = 'shopOwner';  // Example role

//     // Save role in AsyncStorage
//     await AsyncStorage.setItem('userRole', userRole);
//     setRole(userRole);  // Set the role in context

//     // Navigate to the relevant user screen based on role
//     router.push(userRole === 'shopOwner' ? '/ShopManager' : '/VehicleOwner');
//   };

//   return (
//     <View>
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// }
// 7. Handling Nested Stacks
// Inside each role's folder, you can use nested stacks for more complex routing:

// jsx
// Copy code
// // ShopManager/_layout.jsx
// import { Stack } from 'expo-router';

// export default function ShopManagerLayout() {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="ShopManagerHome" />
//       <Stack.Screen name="ShopManagerSettings" />
//       {/* Other screens for shop owners */}
//     </Stack>
//   );
// }
// 8. Summary of Best Practices:
// Role-based Layouts: Use useContext or AsyncStorage to check the user’s role and conditionally render the right layout (Stack) based on their role.
// Use Expo Router's Nested Stacks: Create a separate folder for each user role, with their own _layout.jsx for routing. Use nested stacks for complex workflows within each role.
// Centralized User State: Use Context API or AsyncStorage to manage the authentication state and user role across the app.
// Redirect After Login: After login, set the user role and redirect them to their specific UI screens.
// This approach provides flexibility while keeping your routing structure organized and scalable, especially for an app that might grow to support multiple user roles.







