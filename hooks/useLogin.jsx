import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BASE_URL from '../constants/globals'

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const router = useRouter();

  const handleLogin = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });

      if (response.status === 200 && response.data.code === "00") {
        // console.log("Login response:", response);

        // Save content in AsyncStorage
        await AsyncStorage.setItem("token", response.data.content.jwtToken);
        await AsyncStorage.setItem(
          "user",
          JSON.stringify(response.data.content.user)
        );

        // Update the auth context
        dispatch({
          type: "LOGIN",
          payload: {
            user: response.data.content.user,
            token: response.data.content.jwtToken,
          },
        });

        // Return the user's role
        return { ok: true, role: response.data.content.user.role };
      } else {
        setError(response.data.message);
        return { ok: false, message: response.data.message };
      }
    } catch (err) {
      setError(err.message);
      return { ok: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    handleLogin,
  };
};