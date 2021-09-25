import React from "react";
import {
StyleSheet,
View,
ActivityIndicator,
FlatList,
Text,
TouchableOpacity,
ImageBackground,
Image
} from "react-native";

import aryy from '../assets/eddNed.jpg';

export default class ned extends React.Component {
static navigationOptions = ({ navigation }) => {
return {
  title: "Source Listing",
  headerStyle: {backgroundColor: "#fff"},
  headerTitleStyle: {textAlign: "center",flex: 1}
 };
};
constructor(props) {
 super(props);
 this.state = {
   loading: true,
   dataSource:[]
  };
}
componentDidMount(){
fetch("https://game-of-thrones-quotes.herokuapp.com/v1/character/ned")
.then(response => response.json())
.then((responseJson)=> {
  this.setState({
   loading: false,
   dataSource: responseJson
  })
})
.catch(error=>console.log(error)) //to catch the errors if any
}
FlatListItemSeparator = () => {
return (
  <View style={{
     height: .5,
     width:"100%",
     backgroundColor:"rgba(0,0,0,0.5)",
}}
/>
);
}
renderItem=(data)=>
<TouchableOpacity style={styles.list}>
<Text style={styles.lightText}>{data.item.name}</Text>
<Text style={styles.lightText}>{data.item.house.name}</Text>
<Text style={styles.lightText}>{data.item.quotes}</Text></TouchableOpacity>
render(){

if(this.state.loading){
  return( 
    <View style={styles.loader}> 
      <ActivityIndicator size="large" color="#0c9"/>
    </View>
)}
return(
  <ImageBackground
  style={styles.background}
  source={require("../assets/map.jpg")}
>
<View style={{alignItems: 'center'}}>
   <Image source={aryy} style={{width: 300,height:390}} />
 <FlatList
    data= {this.state.dataSource}
    ItemSeparatorComponent = {this.FlatListItemSeparator}
    renderItem= {item=> this.renderItem(item)}
    keyExtractor= {item=>item.id}
 />
</View>
</ImageBackground>
)}
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "orange"
  },
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center"
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  list:{
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    margin: 50,
    backgroundColor: "#fff"
   }
});