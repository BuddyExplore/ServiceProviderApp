import { SafeAreaView } from "react-native-safe-area-context";
import BottomContainer from "../../../components/Vehicle/BottomContainer";
import MapComponent from "../../../components/Vehicle/MapComponent";
import { View,Text, Dimensions } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const GoButton = (props) => {
  const color = props.content=="Go"?"blue":props.content=="Emergency"?"red":"white"; 
  return(
    <View style={{position:"absolute",top:Dimensions.get("screen").height*props.position[0],left:Dimensions.get("screen").width*props.position[1],padding:20,borderRadius:30,backgroundColor:color,elevation:4}}>
      {props.content=="Go"?
      <Text style={{fontSize:20,fontFamily:"outfit",fontWeight:700,color:"white"}}>{props.content}</Text>:props.content=="Emergency"?<MaterialIcons name="emergency-share" size={20} color={"white"}/>:""}
    </View>
  );
}
export default function AssignmentScreen() {
  return (
    <SafeAreaView>
      <MapComponent />
      <GoButton position={[0.77,0.45]} content="Go"/>
      <GoButton position={[0.77,0.01]} content="Emergency"/>
      <BottomContainer />
    </SafeAreaView>
  );
}
