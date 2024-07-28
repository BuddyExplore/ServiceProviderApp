import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../constants/Colors';
import AssignmentList from "./AssignmentList";


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
                    }} onPress={props.onPress}>{props.content}</Text>
                </View>
            </TouchableOpacity>
            </LinearGradient >);
}

const FilterAssignment = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const handleFilterPress = (filter) => {
      setSelectedFilter(filter);
    };
    
  return (
    <View >
        <View style={styles.FilterAssignment}>
        <FilterButton
          onPress={() => handleFilterPress('All')}
          isSelect={selectedFilter === 'All'}
          content="All"
          
        />
        <FilterButton
          onPress={() => handleFilterPress('Ongoing')}
          isSelect={selectedFilter === 'Ongoing'}
          content="Ongoing"
          
        />
        <FilterButton
          onPress={() => handleFilterPress('Upcoming')}
          isSelect={selectedFilter === 'Upcoming'}
          content="Upcoming"
          
        />
        <FilterButton
          isSelect={selectedFilter === 'Completed'}
          content="Completed"
          onPress={() => handleFilterPress('Completed')}
        />
      </View>
      <AssignmentList status={selectedFilter} />
    </View>
  )
}

export default FilterAssignment

const styles = StyleSheet.create({
    FilterAssignment:{
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
    }
})