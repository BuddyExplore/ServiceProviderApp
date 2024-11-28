import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import ListItems from "./item";
import axios from "axios";
import { useRouter } from "expo-router";

export default function itemList() {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://10.22.162.81:5001/api/travel/item/allItems"
        );
        setData(response.data.content);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);
  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      setTimeout(() => {
        setIsData(true); //Change this to add an item :):)
      }, 2000); // 2000 milliseconds = 2 seconds
    }

    // Cleanup the timer on component unmount or if data changes
  }, [data]);

  useEffect(() => {
    console.log("hi");

    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://10.22.162.81:5001/api/travel/item/allItems"
        );
        setData(response.data.content);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems(); // Fetch data on component mount or when `router` changes
  }, [router]);

  const handleDeletedItem = () => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://10.22.162.81:5001/api/travel/item/allItems"
        );
        setData(response.data.content);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  };

  const refreshList = () => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://10.22.162.81:5001/api/travel/item/allItems"
        );
        setData(response.data.content);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  };
  const preferencesList = [
    {
      name: "Batik Shirt",
      price: "500",
      img: require("./../../assets/images/Shop/batikshirt.jpg"),
      description:
        "Experience unparalleled comfort and style with our premium shirt, crafted from high-quality fabrics for a perfect fit, breathability, and durability. Elevate your wardrobe with timeless elegance.",
    },
    {
      name: "Batik Sarong",
      price: "400",
      img: require("./../../assets/images/Shop/batiksarong.jpg"),
      description:
        "Experience unparalleled comfort and style with our premium shirt, crafted from high-quality fabrics for a perfect fit, breathability, and durability. Elevate your wardrobe with timeless elegance.",
    },
    {
      name: "Batik Trouser",
      price: "1200",
      img: require("./../../assets/images/Shop/batikshort.png"),
      description:
        "Experience unparalleled comfort and style with our premium shirt, crafted from high-quality fabrics for a perfect fit, breathability, and durability. Elevate your wardrobe with timeless elegance.",
    },
    {
      name: "Walpaper",
      price: "700",
      img: require("./../../assets/images/Shop/walpaper.jpg"),
      description:
        "Experience unparalleled comfort and style with our premium shirt, crafted from high-quality fabrics for a perfect fit, breathability, and durability. Elevate your wardrobe with timeless elegance.",
    },
    {
      name: "Rug",
      price: "550",
      img: require("./../../assets/images/Shop/walpaper.jpg"),
      description:
        "Experience unparalleled comfort and style with our premium shirt, crafted from high-quality fabrics for a perfect fit, breathability, and durability. Elevate your wardrobe with timeless elegance.",
    },
    {
      name: "Keytag",
      price: "500",
      img: require("./../../assets/images/Shop/keytag.jpg"),
      description:
        "Experience unparalleled comfort and style with our premium shirt, crafted from high-quality fabrics for a perfect fit, breathability, and durability. Elevate your wardrobe with timeless elegance.",
    },
    {
      name: "Rug",
      price: "300",
      img: require("./../../assets/images/Shop/shop.png"),
      description:
        "Experience unparalleled comfort and style with our premium shirt, crafted from high-quality fabrics for a perfect fit, breathability, and durability. Elevate your wardrobe with timeless elegance.",
    },
    {
      name: "Walpaper",
      price: "200",
      img: require("./../../assets/images/Shop/shop.png"),
      description:
        "Experience unparalleled comfort and style with our premium shirt, crafted from high-quality fabrics for a perfect fit, breathability, and durability. Elevate your wardrobe with timeless elegance.",
    },
    // { name: 'Kayaking', icon: '🔔', img:require('../../assets/images/Home/Prefernces/kayak.png') },
  ];

  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={{
            padding: 20,
            paddingBottom: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 1,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "outfit-bold",
            }}
          >
            Current items
          </Text>

          {/* <Text style={{
                color:Colors.PRIMARY,
                fontFamily:'outfit-medium'
            }}>View all</Text> */}
          <TouchableOpacity style={styles.refreshbtn} onPress={refreshList}>
            <Text style={{ fontWeight: "300" }}>Refresh</Text>
          </TouchableOpacity>
        </View>
        {isData &&
          data.map((item, index) => (
            <ListItems
              prefernce={item}
              key={index}
              deletedItem={handleDeletedItem}
            />
          ))}
        {preferencesList.map((item, index) => (
          <ListItems prefernce={item} key={index} />
        ))}
        {/* <FlatList 
            showsHorizontalScrollIndicator={false}
            data={preferencesList}
            horizontal={false}
            renderItem={({item, index}) => (
                
            )}
        /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 500, // To prevent content from being hidden behind FAB
  },
  refreshbtn: {
    backgroundColor: "white",
    height: 30,
    width: 70,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
