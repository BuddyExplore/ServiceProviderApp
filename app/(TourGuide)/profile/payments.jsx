import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/TourGuide/header";
import PaymentForm from "../../../components/TourGuide/PaymentForm";

const PaymentsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Header
        backButtonShown="flex"
        notificationButtonShown="none"
        title="Payments"
        navigation={navigation}
      /> */}
      <PaymentForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PaymentsScreen;
