import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/TourGuide/header";

const FeedbackScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Feedback" navigation={navigation} />
      <FeedbackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeedbackScreen;