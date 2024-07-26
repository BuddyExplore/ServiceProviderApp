import { SearchBar } from "react-native-elements";
import { Text, View } from "react-native";
import { Component } from "react";
export default class SearchBarComponent extends Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View>
        <SearchBar
          placeholder="Search your Province"
          onChangeText={this.updateSearch}
          value={search}
          lightTheme={true}
          containerStyle={{
            backgroundColor: "white",
            borderBlockColor: "white",
          }}
          inputContainerStyle={{
            backgroundColor: "#FAFAFA",
            paddingHorizontal: 10,
          }}
        />
      </View>
    );
  }
}
