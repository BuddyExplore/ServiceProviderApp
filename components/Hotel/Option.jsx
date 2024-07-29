import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { Colors } from '../../constants/Colors';
import { useRouter } from "expo-router";


export default function Option({ prefernce }) {

  const router = useRouter();
  return (
      <TouchableOpacity style={styles.touchable} onPress={() => router.push(`${prefernce.path}`)}>
        <View>
            {prefernce.icon}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            backgroundColor: "white",
            justifyContent: "space-between",
            width: "75%",
          }}
        >
          
            <View>
                <Text
                style={{
                    color: "black",
                    fontSize: 20,
                    fontWeight: "bold",
                }}
                >
                {prefernce.name}
                </Text>
                {/* <Text
                style={{
                    color: "black",
                    fontSize: 15,
                }}
                >
                {prefernce.price}
                </Text> */}
                <Text style={styles.subText}>{prefernce.subText}</Text>
            </View>

            <View>
                <Text
                style={{
                    color: "black",
                    fontSize: 25,
                    fontWeight: "500",
                }}>{prefernce.count}</Text>
            </View>
        </View>

      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    height: 100,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    overflow: "hidden", // Ensures rounded corners are applied to the image ''
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    backgroundColor: "white",
    padding: 30,
  },
  image: {
    width: 100,
    height: "100%",
    justifyContent: "flex-end", // Positions text at the bottom
  },
  textContainer: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent background for text visibility
    borderBottomLeftRadius: 10,
    justifyContent: "center",
  },
  likesText: {
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: 10,
    right: 10,
  },
  mainText: {
    color: "white",
    fontWeight: "bold",
  },
  subText: {
    marginTop: 5,
    color: Colors.SECOND,
    fontSize: 12,
  },
});
