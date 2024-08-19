import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
const TotalAmountContainer = (props) => {
  const image = {
    uri: "https://docs.expo.dev/static/images/tutorial/background-image.png",
  };

  return (
    <LinearGradient
      locations={[0, 1]}
      start={props.start}
      end={props.end}
      colors={[`${props.backgroundColor[0]}`, `${props.backgroundColor[1]}`]}
      style={{ borderRadius: 28 }}
    >
      <View style={[styles.TotalAmountContainer]}>
        <View>
          {props.content == "Trips" ? (
            <MaterialIcons
              name="assignment"
              color={props.backgroundColor[1]}
              size={30}
              style={{
                backgroundColor: "white",
                padding: 5,
                borderRadius: 10,
              }}
            />
          ) : (
            <MaterialCommunityIcons
              name="cash"
              color={props.backgroundColor[1]}
              size={30}
              style={{
                backgroundColor: "white",
                padding: 5,
                borderRadius: 10,
              }}
            />
          )}
        </View>
        <View style={{ alignItems: "center", width: 100 }}>
          <Text style={{ color: `${props.textColor}`, fontSize: 16}}>
            {props.content}
          </Text>
          <Text style={{ fontSize: 24, fontWeight:"bold", color: `${props.textColor}` }}>
            {props.data}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  TotalAmountContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 15,
    gap: 18,
  },
});
export default TotalAmountContainer;
