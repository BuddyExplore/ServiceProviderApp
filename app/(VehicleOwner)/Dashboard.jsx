import React, { Component } from "react";
import DashboardComponent from "../../components/Vehicle/DashboardComponent"
import Header from "../../components/Vehicle/ManageHeader";

export default class DashboardScreen extends Component {
  render() {
    return <><Header content="Dashboard"/><DashboardComponent earning="25000" assignments="15" /></>;
  }
}
