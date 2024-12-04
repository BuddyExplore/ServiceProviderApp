import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Urls} from "../constants/Urls"


export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const router = useRouter();

  const handleSignup = async (
    first_name,
    last_name,
    mobile_no,
    role,
    email,
    password
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${Urls.SPRING}/signup`, {
        first_name,
        last_name,
        mobile_no,
        email,
        password,
        role,
      });

      if (response.status === 200 && response.data.code === "00") {
        console.log("Signup response:", response);

        // Save content in AsyncStorage
        if (response && response.data && response.data.access_token) {
          await AsyncStorage.setItem("token", response.data.access_token);
          await AsyncStorage.setItem(
            "user",
            JSON.stringify(response.data.content.user)
          );
        }
        // await AsyncStorage.setItem(
        //   "user",
        //   JSON.stringify(response.data.content.user)
        // );

        // Update the auth context
        dispatch({
          type: "SIGNUP",
          payload: {
            user: response.data.content.user,
            token: response.data.content.jwtToken,
          },
        });

        // Redirect to Login page

        return { ok: true };
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
    handleSignup,
  };
};
