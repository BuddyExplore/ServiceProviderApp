import React from "react";
import { LineChart } from "react-native-chart-kit";
import { View, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const data = {
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [20, 45, 28, 80, 45, 99, 60],
      strokeWidth: 2, // optional
      withDots: false,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "rgb(242, 242, 242)",
  backgroundGradientTo: "rgb(242, 242, 242)",
  color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
  strokeWidth: 1, // optional
  fillShadowGradient: "#82C4FA",
  fillShadowGradientOpacity: 1,
};

export default function Graph() {
  return (
    <View>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={{
          marginTop: 20,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
