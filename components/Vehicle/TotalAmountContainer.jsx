import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
const TotalAmountContainer = (props) => {
  const image = {
    uri: "https://docs.expo.dev/static/images/tutorial/background-image.png",
  };
  return (
    <LinearGradient locations={[0,1]} start={props.start}
    end={props.end} colors={[`${props.backgroundColor[0]}`,`${props.backgroundColor[1]}`]} style={{borderRadius: 28}} >
    <View
      style={[
        styles.TotalAmountContainer,
      ]}
    >
      <View>
      <MaterialIcons name="assignment" color={props.backgroundColor[1]} size={20} style={{backgroundColor:"white",padding:16,borderRadius:16}}/>
      </View>
      <View style={{ alignItems: "center",width:100}}>
      <Text style={{ color: `${props.textColor}`, fontSize: 16 }}>
        {props.content}
      </Text>
      <Text style={{ fontSize: 30, color: `${props.textColor}` }}>
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
    flexDirection:"row",
    alignItems: "center",
    paddingVertical: 28,
    paddingHorizontal: 15,
    gap:6
  },
});
export default TotalAmountContainer;
