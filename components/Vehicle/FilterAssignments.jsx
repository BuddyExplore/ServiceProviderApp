import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../constants/Colors';

const FilterButton = (props) => {
    return(
    <LinearGradient locations={[0,1]} start={{x:1, y:0}}
        end={{x:0, y:0}} colors={props.isSelect?[Colors.PRIMARY+"44", Colors.PRIMARY+"44"]:["white","white"]} style={{borderRadius: 28}} >
            <TouchableOpacity>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    gap:10,
                    alignItems:'center',
                    borderRadius: 18,
                    // width: 120,
                    paddingHorizontal:19,
                    height: 40,
                    
                }}>
                    {/* <Ionicons name="add-outline" size={24} color={`${props.isSelect?'white':"black"}`} /> */}
                    <Text style={{
                        color: `${props.isSelect?`${Colors.PRIMARY}`:"black"}`,fontWeight:`${props.isSelect?900:500}`
                    }}>{props.content}</Text>
                </View>
            </TouchableOpacity>
            </LinearGradient >);
}

const FilterAssignment = () => {
  return (
    <View >
        <View style={{
                display:'flex',
                flexDirection:'row',
                gap:10,
                alignItems:'center',
                borderRadius: 20,
                width: 150,
                height: 50,
                marginTop:12,
                marginBottom: 10,
                marginLeft: 10,
                padding: 10
            }}>
                <FilterButton isSelect={true} content="All"/>
                <FilterButton isSelect={false} content="Ongoing"/>
                <FilterButton isSelect={false} content="Upcoming"/>
                <FilterButton isSelect={false} content="Completed"/>
        </View>
    </View>
  )
}

export default FilterAssignment

const styles = StyleSheet.create({})