import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";
import Swiper from "react-native-swiper";


export default function DetailScreen(props:any){
  
    return (
    
<View style={style.view}>

</View>
  
    );
}

const style = StyleSheet.create({
  view:{
    backgroundColor:'black' , flex:1,
  
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%', // Set the image width to 100% of the container
    height: '100%', // Set the image height to 100% of the container
  },
})