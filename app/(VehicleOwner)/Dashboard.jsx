import React, { Component } from "react";
import DashboardComponent from "../../components/Vehicle/DashboardComponent"

export default class DashboardScreen extends Component {
  render() {
    return <DashboardComponent earning="25000" assignments="15" />;
  }
}
