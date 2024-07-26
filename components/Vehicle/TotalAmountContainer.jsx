import { View, Text, StyleSheet } from "react-native";

const TotalAmountContainer = (props) => {
  const image = {
    uri: "https://docs.expo.dev/static/images/tutorial/background-image.png",
  };
  return (
    <View
      style={[
        styles.TotalAmountContainer,
        { backgroundColor: `${props.backgroundColor}` },
      ]}
    >
      <Text style={{ color: `${props.textColor}`, fontSize: 22 }}>
        {props.content}
      </Text>
      <Text style={{ fontSize: 45, color: `${props.textColor}` }}>
        {props.data}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TotalAmountContainer: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 58,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
});
export default TotalAmountContainer;
