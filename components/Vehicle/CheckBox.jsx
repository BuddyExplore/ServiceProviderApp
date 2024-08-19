import React from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";

const CheckBoxItem = ({ step, checked, onPress }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <CheckBox
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        checked={checked}
        checkedColor="#0078A1"
        onPress={onPress}
      />
    </View>
  );
};

export default CheckBoxItem;
