import React from "react";
import {Image, StyleSheet, View } from "react-native";

import Swiper from "react-native-swiper";

export default function DetailScreen4(props: any) {

    return (

        <View style={style.view}>
            <View style={style.imageContainer}>
                <Swiper loop={false} >
                    <Image
                        style={style.image}
                        resizeMode="contain"
                        source={require("../../assets/images/surahikhlas/surahikhlas.jpg")}
                    />

                </Swiper>


            </View>


        </View>



    );
}
const style = StyleSheet.create({
    view: {
        backgroundColor: 'black', flex: 1,

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
