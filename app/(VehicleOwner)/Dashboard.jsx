import React, { Component } from "react";
import DashboardComponent from "../../components/Vehicle/DashboardComponent"
import Header from "../../components/Vehicle/ManageHeader";
import { Dimensions, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default class DashboardScreen extends Component {
  render() {
    return <SafeAreaView style={{height:Dimensions.get("screen").height,backgroundColor:"#F5F5F5"}}><Header content="Dashboard"/><DashboardComponent earning="25000" assignments="15" /></SafeAreaView>;
  }
}
